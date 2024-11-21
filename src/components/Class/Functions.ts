"use server";

import prisma from "@/utils/db";
import { dataType } from "./Type";
import { $Enums } from "@prisma/client";
import { months } from "../Extra";
import { validateDate } from "@mui/x-date-pickers/validation";

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

export const countStudents = async (
  classname: string
): Promise<{
  total: number;
  boys: number;
  girls: number;
}> => {
  const revisedClassName = `class_${classname.replace(
    "th",
    ""
  )}` as $Enums.ClassList;
  const result = await prisma.class
    .findFirstOrThrow({
      where: {
        id: revisedClassName,
      },
      select: {
        totalStudents: {
          select: {
            gender: true,
          },
        },
      },
    })
    .then((res) => {
      const totalStudent = res.totalStudents.length;
      let boys = 0;
      let girls = 0;
      res.totalStudents.map((val) => {
        val.gender.toString() === "Male" ? boys++ : girls++;
      });
      return {
        total: totalStudent,
        boys,
        girls,
      };
    });
  return result;
};

export const getOutstandingTotal = async (
  classname: string,
  monthname: string
): Promise<number> => {
  let total = 0;
  const fees = await prisma.fee.findFirstOrThrow({
    where: {
      classId: classname as $Enums.ClassList,
    },
    select: {
      amount: true,
    },
  });
  await prisma.class
    .findFirstOrThrow({
      where: {
        id: classname as $Enums.ClassList,
      },
      select: {
        totalStudents: {
          select: {
            feesPaidUpto: true,
          },
        },
      },
    })
    .then((res) => {
      const currentMonth = new Date().getMonth() - 1;

      res.totalStudents.map((val) => {
        const value = months.indexOf(val.feesPaidUpto.toString());
        if (monthname) {
          if (value < months.indexOf(monthname)) {
            total += fees.amount;
          }
        } else {
          total += (currentMonth - value) * fees.amount;
        }
      });
    });
  return total;
};
