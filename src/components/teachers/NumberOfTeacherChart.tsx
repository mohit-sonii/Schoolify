"use client";
import { LineChart } from "@mui/x-charts";
import React, { ChangeEvent } from "react";
import { useState, useRef, useEffect } from "react";
import {teacherJoiningMonth } from "./Functions";
import { years } from "../Extra";
import useModalStore from "@/utils/store";

const NumberOfTeacherChart = () => {
  const currentYear = new Date().getFullYear();
  const [width, setWidth] = useState(500);
  const widthRef = useRef<HTMLDivElement>(null);
  const [keys, setKeys] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [optionValue, setOptionValue] = useState<number>(currentYear);
  const currValue = useModalStore((state) => state.teacherRenderState);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value, 10);
    setOptionValue(val);
    const result = await teacherJoiningMonth(val);
    setKeys(result[0]);
    setValues(result[1]);
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await teacherJoiningMonth(currentYear)
      setKeys(result[0])
      setValues(result[1])
    }
    fetch()
  }, [currValue])

  useEffect(() => {
    const result = async () => {
      const ans = await teacherJoiningMonth(currentYear);
      setKeys(ans[0]);
      setValues(ans[1]);
    };
    result();
    function setResize() {
      if (widthRef.current) {
        setWidth(widthRef.current.offsetWidth);
      }
    }
    setResize();
    window.addEventListener("resize", setResize);
    return () => window.removeEventListener("resize", setResize);
  }, []);

  return (
    <div ref={widthRef} className="w-full flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
        Number of New Joinies
        <span className="hidden">{optionValue}</span>
        <span className="text-[10px] font-light text-gray-500">
          Monthly Analysis
        </span>
      </h3>
      <div className="w-max">
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

      <LineChart
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
            label: "Number of Joinies",
            color: "#8A89CC",
          },
        ]}
        width={width}
        height={350}
      />
    </div>
  );
};

export default NumberOfTeacherChart;
