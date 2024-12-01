import prisma from "@/utils/db";

import { months } from "@/components/Extra";
const getMonth = new Date().getMonth();

const classId: string[] = [];
const totalStudent: number[] = [];

export const outstandingData = async (): Promise<{
  classId: string[];
  totalStudent: number[];
}> => {
  const result = await prisma.class.findMany({
    select: {
      id: true,
      totalStudents: {
        select: {
          feesPaidUpto: true,
        },
      },
    },
  });
  if (!result) {
    return {
      classId: [],
      totalStudent: [],
    };
  }
  const res = result.map((value) => {
    const className = value.id.replace("class_", "").concat("th");
    const count = value.totalStudents.filter((element) => {
      const month = months.indexOf(element.feesPaidUpto);
      return month + 1 < getMonth;
    }).length;
    classId.push(className);
    totalStudent.push(count);
    return {
      classId,
      totalStudent,
    };
  });
  return res[0];
};
