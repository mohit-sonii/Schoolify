import { incomeType } from "@/components/Profit/Functions";
import prisma from "@/utils/db";
import { $Enums } from "@prisma/client";
import { ActionReturnType } from "../ReturnType";

export const AddIncomeAction = async(data:incomeType):Promise<ActionReturnType> => {
  
  try {
    const result = await prisma.gain.create({
      data: {
        monthName: data.month as $Enums.Month,
        date: data.date,
        amount: data.amount,
        year: data.year,
        title: data.title,
        description: data.description
      }
    })
    if(result){
      return {
        success: true,
        message:"Income Added Successfully !!"
      }
    }
  } catch (err:any) {
    console.log(err)
    return {
      success: false,
      message:err?.message
    }
  }
  return {
    success: false,
    message:"Something went wrong!!"
  }
}