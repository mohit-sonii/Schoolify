"use server";
import React from "react";

const Salary = ({
  amount,
  lastPaid,
  pendingAmount,
  monthsPending,
}: {
  amount: number;
  lastPaid: string;
  pendingAmount: number;
  monthsPending: string[];
}) => {
  return (
    <div className=" rounded-lg p-4 w-full bg-amber-200 text-xs flex flex-col items-center justify-center h-max gap-3">
      <h1 className="text-sm font-semibold text-gray-900 ">Salary Details</h1>
      <div className="flex flex-col gap-2 text-xs font-light  w-full ">
        <h3 className="font-semibold text-gray-700">
          Salary :{" "}
          <span className="font-normal text-gray-500">{`${amount}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700">
          Last Paid :{" "}
          <span className="font-normal text-gray-500">{`${lastPaid}`}</span>
        </h3>
        <h3 className="font-semibold text-gray-700">
          Pending For :{" "}
          {monthsPending.length > 0 ? (
            monthsPending.map((val) => (
              <span
                key={val}
                className="text-gray-600 font-light text-xs rounded-sm shadow-sm px-4 py-1  bg-white w-max flex gap-2 "
              >
                {val}
              </span>
            ))
          ) : (
            <span className="font-normal text-gray-500">Upto date</span>
          )}
        </h3>
        <h3 className="font-semibold text-gray-700">
          Total Pending Amount :{" "}
          <span className="font-normal text-gray-500">{`${pendingAmount}`}</span>
        </h3>
      </div>
    </div>
  );
};

export default Salary;
