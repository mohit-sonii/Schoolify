"use client";
import Button from "../Button";
import { Divider } from "@mui/material";

const Expense = ({value}:{value:number}) => {
  
  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
            Annual Expense
            <span className="text-[10px] font-light text-gray-500">
              Current Year
            </span>
          </h3>
          <Button innerText="Add Expense" />
        </div>
        <h1 className={`w-max text-2xl font-bold ${value > 0 ? 'text-red-600' : 'text-gray-600'}`}>{`$${value}`}</h1>
      </div>
      <Divider orientation="vertical" />
    </div>

  );
};

export default Expense;
