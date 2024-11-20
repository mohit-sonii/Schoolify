"use server";

import prisma from "@/utils/db";
import { dataType } from "./Type";

export const fetchTeacherSubject = async (): Promise<dataType[]> => {
  const ans = await prisma.class
    .findMany({
      select: {
        id: true,
        teacher: {
          select: {
            firstname: true,
            lastname: true,
            username: true,
          },
        },
        subjects: {
          select: {
            subjectName: true,
          },
        },
      },
    })
    .then((res) => {
      const result = res.map((val) => {
        return {
          classname: val.id.replace("class_", "").concat("th"),
          teacher: val.teacher.map((val) => {
            return {
              fullName: val.firstname + " " + val.lastname,
              username: val.username,
            };
          }),
          subjects: val.subjects.map((val) => val.subjectName),
        };
      });
      return result;
    });
  return ans;
};
