"use server";
import prisma from "@/utils/db";
import { $Enums } from "@prisma/client";

export type examReturn = {
  classId: string;
  subjectname: string;
  monthname: string;
  date: number;
};

export const findExams = async (
  examMonth: string,
  classname: string
): Promise<examReturn[] | null> => {
  const result = await prisma.examMonth
    .findFirst({
      where: {
        name: examMonth as $Enums.MonthsOfExam,
      },
      select: {
        exams: {
          select: {
            classId: true,
            subjectname: true,
            monthname: true,
            date: true,
          }, 
        },
      },
    })
    .then((res) => {
      if (res) {
        const data = res.exams.filter(
          (val) => val.classId === (classname as $Enums.ClassList)
        );

        return data.map((val) => {
          return {
            classId: val.classId.toString(),
            monthname: val.monthname.toString(),
            subjectname: val.subjectname,
            date: val.date,
          };
        });
      }
      return null;
    });
  return result;
};
