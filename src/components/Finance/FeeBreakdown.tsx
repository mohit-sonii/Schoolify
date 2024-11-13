import React from "react";
import AccordionElement from "./AccordionElement";
import prisma from "@/utils/db";

const FeeBreakdown = async () => {
  const res = await prisma.class
    .findMany({
      select: {
        id: true,
        fees: {
          select: {
            amount: true,
          },
        },
      },
    })
    .then((res) => {
      const arr = res.map((val) => {
        return {
          classname: val.id
            .charAt(0)
            .toUpperCase()
            .concat(val.id.substring(1))
            .replace("_", " "),
          amount: val.fees[0].amount,
        };
      });
      return { arr };
    });

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold text-gray-800">Fee Breakdwn</h3>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div>
          {res.arr.map((val) => (
            <AccordionElement key={val.classname}
              fees={val.amount}
              classname={val.classname}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeeBreakdown;
