"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { averageSalary } from "./Functions";
import { years } from "../Extra";
import useModalStore from "@/utils/store";

const AverageSalary = () => {
  const [optionValue, setOptionValue] = useState<number>(
    new Date().getFullYear()
  );
  const [value, setValue] = useState<number>(0);
  const currValue = useModalStore((state) => state.teacherRenderState)

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const current = parseInt(e.target.value, 10);
    setOptionValue(current);
    const result = await averageSalary(current);
    setValue(result);
  };

  useEffect(() => {
    const fetch = async () => {
      const avg = await averageSalary(new Date().getFullYear())
      setValue(avg)
    }
    fetch()
  }, [currValue])

  return (
    <div className="flex w-full xl:w-[70%] gap-4">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 justify-between items-center w-full">
          <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
            Average Salary
            <span className="text-[10px] font-light text-gray-500">
              {optionValue} Year
            </span>
          </h3>
          <select
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer w-max"
            onChange={(e) => handleChange(e)}
          >
            {years.map((val) => (
              <option
                key={val}
                value={val}
                className="font-light text-xs text-gray-500"
              >
                {val}
              </option>
            ))}
          </select>
        </div>
        <h1 className="w-max text-2xl font-bold text-green-600">{`$${value}`}</h1>
      </div>
    </div>
  );
};

export default AverageSalary;
