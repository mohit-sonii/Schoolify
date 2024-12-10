import AnnualyChart from "@/components/Expenses/AnnualyChart";
import Expense from "@/components/Expenses/Expense";
// import ExpenseTable from "@/components/Expenses/ExpenseTable";
// import { expenseType, getAllData } from "@/components/Expenses/Functions";
import { Divider } from "@mui/material";
import React from "react";

const page = async() => {
  // const result: expenseType[] = await getAllData();
  return (
    <div className="flex flex-col gap-5 relative">
      <h1 className="font-bold text-xl">Expenses</h1>
      <Divider />
      <AnnualyChart />
      <Divider />
      <Expense />
      {/* <ExpenseTable expenditure={result} /> */}
      <Divider />
    </div>
  );
};

export default page;
