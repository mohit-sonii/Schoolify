"use client";

import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { months } from "../Extra";
import { monthlyFeeCollection } from "./Functions";

const TotalCollectionFromFees = () => {
  const [optionValue, setOptionValue] = useState<string>("");
  const [totalFees, setTotalFees] = useState<number>(0);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const month = e.target.value;
    setOptionValue(month);
    const res = await monthlyFeeCollection(month);
    setTotalFees(res);
  };
  
  useEffect(() => {
    const result = async () => {
      const total = await monthlyFeeCollection("");
      setTotalFees(total);
    };
    result();
  }, []);

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
          Total Fees Collection
          <span className="text-[10px] font-light text-gray-500">
            All Classes
          </span>
        </h3>
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
          onChange={(e) => handleChange(e)}
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
      <h1 className="w-max text-2xl font-bold text-green-600">{`$${totalFees}`}</h1>
    </div>
  );
};

export default TotalCollectionFromFees;
