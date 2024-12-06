"use client";

import IncomeTable from "@/components/Profit/IncomeTable";
import Income from "@/components/Profit/Income";
import Expense from "@/components/Profit/Expense";
import Profit from "@/components/Profit/Profit";
import ProfitAnuallyChart from "@/components/Profit/ProfitAnuallyChart";
import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AllIncomeData,
  calculateTotalExpense,
  calculateTotalProfit,
  incomeType,
} from "@/components/Profit/Functions";
import useModalStore from "@/utils/store";

const page = () => {
  const currState = useModalStore((state) => state.renderState);
  const [fetchDataResult, setFetchDataResult] = useState<{
    profit: number;
    incomeData: incomeType[];
    expense: number;
    income: number;
  }>({
    profit: 0,
    expense: 0,
    income: 0,
    incomeData: [],
  });
  useEffect(() => {
    const fetch = async () => {
      const year = new Date().getFullYear();
      const income = await calculateTotalProfit(year);
      const expense = await calculateTotalExpense(year);
      const profit = income - expense;
      const incomeData = await AllIncomeData();
      return {
        income,
        expense,
        profit,
        incomeData,
      };
    };
    fetch().then((val) => setFetchDataResult(val));
  }, [currState]);

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Profit</h1>
      <Divider />
      <div className="grid xl:grid-cols-3 gap-4">
        <Income value={fetchDataResult.income} />
        <Expense value={fetchDataResult.expense} />
        <Profit value={fetchDataResult.profit} />
      </div>
      <Divider />
      <ProfitAnuallyChart />
      <Divider />
      <IncomeTable gain={fetchDataResult.incomeData} />
    </div>
  );
};

export default page;
