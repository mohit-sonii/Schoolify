"use server";
import { expenseType } from "@/components/Expenses/Functions";
import prisma from "@/utils/db";
import { $Enums } from "@prisma/client";
import { ActionReturnType } from "../ReturnType";

export const AddExpenseAction = async (
  data: expenseType 
): Promise<ActionReturnType> => {
  try {
    const result = await prisma.expense.create({
      data: {
        monthName: data.month as $Enums.Month,
        date: data.date,
        amount: data.amount,
        year: data.year,
        description: data.description,
        title: data.title,
      },
    });
    if (result) {
      return { success: true, message: "Expense Added successfully !!" };
    }
  } catch (error: any) {
    console.log(error);
    return {
      success: false,
      message: error.message,
    };
  }
  return {
    success: false,
    message: "Something went wrong",
  };
};
