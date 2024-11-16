"use server";

import prisma from "@/utils/db";

export const teacherCount = async () => {
  const count = await prisma.teacher.count();
  return count;
};

export const averageSalary = async (currentYear: number): Promise<number> => {
  let total = 0;
  await prisma.teacher
    .findMany({
      where: {
        joiningYear: currentYear,
      },
      select: {
        salary: true,
      },
    })
    .then((ans) => {
      ans.map((val) => (total += val.salary));
    });
  return total
};

export const teacherJoiningMonth = async (selectedYear: number): Promise<[string[], number[]]> => {
  const monthWiseData: { [key: string]: number } = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  await prisma.teacher.findMany({
    where: {
      joiningYear: selectedYear
    },
    select: {
      joiningMonth: true
    }
  }).then((res) => {
    res.map((val) => {
      monthWiseData[val.joiningMonth]++
    })
  })
  const allKeys: string[] = Object.keys(monthWiseData)
  const allValues: number[] = Object.values(monthWiseData)
  return [allKeys, allValues]
}