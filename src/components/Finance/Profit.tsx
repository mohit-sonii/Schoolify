"use client";

import { ChangeEvent, useState, useEffect } from "react";
import { months } from "../Extra";
import { PieChart } from "@mui/x-charts/PieChart";
import { monthlyProfit } from "./Functions";

const Profit = () => {
  const currentMonthIdx = new Date().getMonth() - 1;
  const currentMonth = months[currentMonthIdx];
  const [optionValue, setOptionValue] = useState<string>(currentMonth);
  const [total, setTotal] = useState<number>(0);
  const [apiResult, setApiResult] = useState<
    { label: string; value: number }[]
  >([
    {
      label: "",
      value: 0,
    },
  ]);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setOptionValue(val);
    const res = await monthlyProfit(val);
    setTotal(res[1]);
    setApiResult(res[0]);
  };
  useEffect(() => {
    const res = async () => {
      const abc = await monthlyProfit(optionValue);
      setApiResult(abc[0]);
      setTotal(abc[1]);
    };
    res();
  }, []);

  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 ">
        <div className="flex flex-col justify-center gap-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
              Total Profit
              <span className="text-[10px] font-light text-gray-500">
                Monthly Analysis
              </span>
            </h3>
            <select
              className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
              onChange={(e) => handleChange(e)}
            >
              <option
                value={currentMonth}
                className="font-light text-xs text-gray-500"
              >
                {currentMonth}
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
        </div>
        <h1 className={`w-max text-2xl font-bold ${total === 0 ? 'text-gray-600' : total < 0 ? 'text-red-600':'text-green-600'}`}>{`$${total}`}</h1>

      <PieChart
        series={[
          {
            data: apiResult,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        slotProps={{
          legend: { hidden: true },
        }}
        height={200}
        colors={["#8A89CC", "#7D6CA8"]}
      />
    </div >
    </>
  );
};
export default Profit;
