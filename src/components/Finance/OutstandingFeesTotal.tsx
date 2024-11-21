"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { monthAnalysis } from "./Functions";
import { months } from "../Extra";

const OutstandingFeesTotal = () => {
  const [optionMonth, setOptionMonth] = useState<string>("");
  const [total, setTotal] = useState<number>(0);

  const handleMonthChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value
    setOptionMonth(month)
    const val = await monthAnalysis(month)
    setTotal(val)
  }
  useEffect(() => {
    const res = async () => {
      const val = await monthAnalysis("")
      setTotal(val)
    }
    res()
  }, [])

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
          Total Outstanding Fees
          <span className="text-[10px] font-light text-gray-500">
            All Classes
          </span>
        </h3>
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
          onChange={(e) => handleMonthChange(e)}
        >
          <option value={""} className="font-light text-xs text-gray-500">
            Select Month
          </option>
          {months.map((val) => (
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
        : <span className="text-xs font-light text-gray-600">No Pending Dues!!</span>
      }
    </div>
  );
};

export default OutstandingFeesTotal;
