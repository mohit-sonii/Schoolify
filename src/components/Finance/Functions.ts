"use server";
import prisma from "@/utils/db";

import { months } from "../Admin/OutstandingDues/OutStandingAmount";

const details: { [key: string]: number } = {};

// classwise Total outstanding
export const findTotalOutstanding = async (): Promise<{
  [key: string]: number;
}> => {
  const currentMonth = new Date().getMonth();
  await prisma.student
    .findMany({
      select: {
        feesPaidUpto: true,
        class: {
          select: {
            id: true,
            fees: {
              select: {
                amount: true,
              },
            },
          },
        },
      },
    })
    .then((res) => {
      res.map((val) => {
        const monthIdx = months.indexOf(val.feesPaidUpto) + 1;
        if (monthIdx < currentMonth) {
          const classname = val.class.id.replace("class_", "").concat("th");
          const feesAmount = val.class.fees[0].amount;
          const total = (currentMonth - monthIdx) * feesAmount;
          if (classname in details) {
            details[classname] += total;
          } else {
            details[classname] = total;
          }
        }
      });
    });

  const sortedKeys = Object.keys(details).sort();
  const sortedData: { [key: string]: number } = {};
  sortedKeys.forEach((val) => {
    sortedData[val] = details[val];
  });
  return sortedData;
};

// monthly total outstandig including all classes
export const monthAnalysis = async (selectedMonth: string): Promise<number> => {
  const indexOfSelectedMonth = months.indexOf(selectedMonth);
  let total = 0;
  await prisma.student
    .findMany({
      select: {
        feesPaidUpto: true,
        class: {
          select: {
            fees: {
              select: {
                amount: true,
              },
            },
          },
        },
      },
    })
    .then((res) => {
      let currentMonth = new Date().getMonth();
      res.map((val) => {
        const valIndex = months.indexOf(val.feesPaidUpto);
        if (selectedMonth === "") {
          total +=
            val.class.fees[0].amount * Math.abs(currentMonth - 1 - valIndex);
        } else {
          if (valIndex < indexOfSelectedMonth) {
            total += val.class.fees[0].amount;
          }
        }
      });
    });
  return total;
};

export const monthlyFeeCollection = async (monthName: string): Promise<number> => {
  let total = 0;
  await prisma.student
    .findMany({
      select: {
        feesPaidUpto: true,
        class: {
          select: {
            fees: {
              select: {
                amount: true,
              },
            },
          },
        },
      },
    })
    .then((res) => {
      res.map((val) => {
        const indexOfPaidMonth = months.indexOf(val.feesPaidUpto);
        const charge = val.class.fees[0].amount;
        if (monthName === "") {
          total += (indexOfPaidMonth * charge);
        } else {
          const indexOfSelectedMonth = months.indexOf(monthName);
          if (indexOfPaidMonth >= indexOfSelectedMonth) {
            total += charge;
          }
        }
      });
    });
  return total;
};
