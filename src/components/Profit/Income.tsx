"use client";
import useModalStore from "@/utils/store";
import Button from "../Button";
import { Divider } from "@mui/material";
import IncomeForm from "../AddPopUps/Incomes/IncomeForm";
import { useEffect, useState } from "react";
import { calculateTotalProfit } from "./Functions";

const Income = () => {
  const openModal = useModalStore((state) => state.openModal)
  const currState = useModalStore((state) => state.profitRenderState);
  const globalIncomeSet = useModalStore((state)=>state.setTotalIncome)
  
  const [value, setValue] = useState<number>(0);

  const incomePage = () => {
    openModal(
      <IncomeForm />
    )
  }
  useEffect(() => {
    const fetch = async () => {
      const year = new Date().getFullYear()
      const income = await calculateTotalProfit(year);
      setValue(income);
      globalIncomeSet(income);
    }
    fetch();
  }, [currState])
  return (
    <div className="flex w-full gap-4">
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
            Annual Income
            <span className="text-[10px] font-light text-gray-500">
              Current Year
            </span>
          </h3>
          <Button innerText="Add Income" click={incomePage} />
        </div>
        <h1 className={`w-max text-2xl font-bold ${value > 0 ? 'text-green-600' : 'text-gray-600'}`}>{`$${value}`}</h1>
      </div>
      <Divider orientation="vertical" />
    </div>

  );
};

export default Income;
