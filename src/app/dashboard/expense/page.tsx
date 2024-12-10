import AnnualyChart from "@/components/Expenses/AnnualyChart";
import Expense from "@/components/Expenses/Expense";
import { Divider } from "@mui/material";
import React from "react";
import { Metadata } from "next";

const page = async() => {
  return (
    <div className="flex flex-col gap-5 relative">
      <h1 className="font-bold text-xl">Expenses</h1>
      <Divider />
      <AnnualyChart />
      <Divider />
      <Expense />
      <Divider />
    </div>
  );
};

export default page;
