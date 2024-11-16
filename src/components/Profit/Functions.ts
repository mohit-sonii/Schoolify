"use server";
import prisma from "@/utils/db";
export const calculateProfit = async (
  selectedYear: number
): Promise<[string[], number[]]> => {
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
  //calculate gain
  await prisma.gain
    .findMany({
      where: {
        year: selectedYear,
      },
      select: {
        amount: true,
        monthName: true,
      },
    })
    .then((res) => {
      res.map((val) => {
        monthWiseData[val.monthName] += val.amount;
      });
    });

  const allKeys: string[] = Object.keys(monthWiseData);
  //calcualte expense
  await prisma.expense
    .findMany({
      where: {
        year: selectedYear,
      },
      select: {
        amount: true,
        monthName: true,
      },
    })
    .then((res) => {
      res.map((val) => {
        monthWiseData[val.monthName] -= val.amount;
      });
    });

  const allValues: number[] = Object.values(monthWiseData);
  return [allKeys, allValues];
};

// calculate total profit

export const calculateTotalProfit = async (currentYear: number) => {
  let total = 0;
  await prisma.gain
    .findMany({
      where: {
        year: currentYear,
      },
      select: {
        amount: true,
      },
    })
    .then((res) => {
      res.map((val) => (total += val.amount));
    });
  return total;
};


//calculate total expense
export const calculateTotalExpense = async (currentYear: number) => {
  let total = 0;
  await prisma.expense.findMany({
    where: {
      year:currentYear
    },
    select: {
      amount:true
    }
  }).then((res) => {
    res.map((val)=>total+=val.amount)
  })
  return total
}