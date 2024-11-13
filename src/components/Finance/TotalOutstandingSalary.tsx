"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { monthNames } from "../Students/StudentTable/TableType";
import { monthlySalaryOutstanding } from "./Functions";

const TotalOutstandingSalary = () => {
  const [optionMonth, setOptionMonth] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  const handleMonthChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value
    setOptionMonth(month)
    const val = await monthlySalaryOutstanding(month)
    setTotal(val)
  }

  useEffect(() => {
    const res = async () => {
      const val = await monthlySalaryOutstanding("")
      setTotal(val)
    }
    res()
  }, [])

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
          Total Outstanding Salaries
          <span className="text-[10px] font-light text-gray-500">
            All Teachers
          </span>
        </h3>
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
          onChange={(e) => handleMonthChange(e)}
        >
          <option value={""} className="font-light text-xs text-gray-500">
            Select Month
          </option>
          {monthNames.map((val) => (
            <option
              key={val}
              value={`${val}`}
              className="text-xs font-light text-gray-500"
            >
              {val}
            </option>
          ))}
        </select>
      </div>
      {total > 0 ?
        <h1 className="w-max text-2xl font-bold text-gray-800">{`$${total}`}</h1>
        : <span className="text-xs font-light text-gray-600">Happy Teachers!!</span>
    }
    </div>
  );
};

export default TotalOutstandingSalary;
