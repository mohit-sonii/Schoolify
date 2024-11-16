import IncomeTable from '@/components/Profit/IncomeTable'
import Income from "@/components/Profit/Income";
import Expense from "@/components/Profit/Expense";
import Profit from "@/components/Profit/Profit";
import ProfitAnuallyChart from "@/components/Profit/ProfitAnuallyChart";
import { Divider } from "@mui/material";
import React from "react";
import { AllIncomeData, calculateTotalExpense, calculateTotalProfit } from "@/components/Profit/Functions";

const page = async () => {
  const year = new Date().getFullYear();
  const income = await calculateTotalProfit(year);
  const expense = await calculateTotalExpense(year)
  const profit = income - expense;
  const incomeData = await AllIncomeData()

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Profit</h1>
      <Divider />
      <div className="grid xl:grid-cols-3 gap-4">
        <Income value={income} />
        <Expense value={expense} />
        <Profit value={profit} />
      </div>
      <Divider />
      <ProfitAnuallyChart />
      <Divider />
      <IncomeTable gain={incomeData} />
    </div>
  );
};

export default page;
