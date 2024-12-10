"use client";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { annuallyTrack } from "@/components/Expenses/Functions";
import React from "react";
import { years } from "../Extra";
import useModalStore from "@/utils/store";

const AnnualyChart = () => {

  const widthRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();
  const [width, setWidth] = useState<number>(500);
  const [optionValue, setOptionValue] = useState<number>(year);
  const [keys, setKeys] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const currState = useModalStore((state) => state.expenseRenderState)
  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const change = parseInt(e.target.value, 10);
    setOptionValue(change);
    const result = await annuallyTrack(change);
    setKeys(result[0]);
    setValues(result[1]);
  };

  useEffect(() => {
    const result = async () => {
      const res = await annuallyTrack(year);
      setKeys(res[0]);
      setValues(res[1]);
    };
    result();
    const reSize = () => {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth);
      }
    };
    reSize();
    window.addEventListener("resize", reSize);
    return () => window.removeEventListener("resize", reSize);
  }, [currState]);

  return (
    <div ref={widthRef} className="w-full flex flex-col gap-3">
      <div className="w-max">
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer w-max"
          onChange={(e) => handleChange(e)}
        >
          {years.map((val) => (
            <option key={val} value={val} className="font-light text-xs text-gray-500">
              {val}
            </option>
          ))}
        </select>
      </div>

      <LineChart className="overflow-x-scroll"
        xAxis={[
          {
            data: keys,
            scaleType: "point",
            label: "Months",
          },
        ]}
        series={[
          {
            data: values,
            label: "Total Expenses",
            color: "#8A89CC",
          },
        ]}
        width={width}
        height={300}
      />
    </div>
  );
};

export default AnnualyChart;
