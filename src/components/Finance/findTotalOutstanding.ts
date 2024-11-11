import prisma from "@/utils/db";
import { months } from "../Admin/OutstandingDues/OutStandingAmount";

const details: { [key: string]: number } = {};

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
