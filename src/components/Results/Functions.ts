"use server";

import prisma from "@/utils/db";
import { $Enums } from "@prisma/client";

export const fetchSubjectForClass = async (
  classname: string
): Promise<string[]> => {
  const array: string[] = [];
  await prisma.class
    .findFirst({
      where: {
        id: classname as $Enums.ClassList,
      },
      select: {
        subjects: {
          select: {
            subjectName: true,
          },
        },
      },
    })
    .then((res) => {
      res?.subjects.map((val) => array.push(val.subjectName));
    });
  return array;
};

export type resultDataType = {
  score: number;
  firstname: string;
  lastname: string;
};

export const resultData = async (
  classname: string,
  monthname: string,
  subjectname: string
): Promise<resultDataType[] | null> => {
  const result: resultDataType[] = [];
  await prisma.class
    .findFirst({
      where: {
        id: classname as $Enums.ClassList,
      },
      select: {
        exams: {
          where: {
            subjectname: subjectname,
            monthname: monthname as $Enums.MonthsOfExam,
          },
          select: {
            results: {
              select: {
                score: true,
                student: {
                  select: {
                    firstname: true,
                    lastname: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    .then((res) => {
      res?.exams[0]?.results?.map((val) => {
        const obj: resultDataType = {
          score: val.score ? val.score : 0,
          firstname: val.student ? val.student.firstname : "",
          lastname: val.student ? val.student.lastname : "",
        };
        result.push(obj);
      });
    });
  return result;
};
