"use server";

import prisma from "@/utils/db";

// annually distribution of expenses (data for line chart)
export const annuallyTrack = async (
  requestedYear: number
): Promise<[string[], number[]]> => {
  const monthWiseDataForChart: {
    [key: string]: number;
  } = {
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
  await prisma.expense
    .findMany({
      where: {
        year: requestedYear,
      },
      select: {
        monthName: true,
        amount: true,
      },
    })
    .then((res) => {
      res.map((val) => {
        monthWiseDataForChart[val.monthName] += val.amount;
      });
    });
  const allKeys: string[] = Object.keys(monthWiseDataForChart);
  const allValues: number[] = Object.values(monthWiseDataForChart);
  return [allKeys, allValues];
};
