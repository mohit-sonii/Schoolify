"use server";

import prisma from "@/utils/db";
import { $Enums } from "@prisma/client";
import { NextResponse } from "next/server";

// annually distribution of expenses (data for line chart)
export const annuallyTrack = async (
  requestedYear: number
): Promise<[string[], number[]]> => {
  const monthWiseDataForChart: {
    [key: string]: number;
  } = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };
  await prisma.expense
    .findMany({
      where: {
        year: requestedYear,
      },
      select: {
        monthName: true,
        amount: true,
      },
    })
    .then((res) => {
      res.map((val) => {
        monthWiseDataForChart[val.monthName] += val.amount;
      });
    });
  const allKeys: string[] = Object.keys(monthWiseDataForChart);
  const allValues: number[] = Object.values(monthWiseDataForChart);
  return [allKeys, allValues];
};

export type expenseType = {
  title: string,
  amount: number,
  date: number,
  month: string
  year: number,
  description: string
}
// getting all data for table
export const getAllData = async (): Promise<expenseType[]> => {
  const result: expenseType[] = []
  await prisma.expense.findMany({
    select: {
      title: true,
      description: true,
      date: true,
      monthName: true,
      year: true,
      amount: true,
    }
  }).then((res) => {
    res.map((val) => {
      const obj: expenseType = {
        title: val.title,
        amount: val.amount,
        date: val.date,
        month: val.monthName.toString(),
        year: val.year,
        description: val.description
      }
      result.push(obj)
    })
  })
  return result
}

//create expense
type CreateExpense = {
  title: string,
  amount: number,
  date: number,
  month: $Enums.Month,
  year: number,
  description: string
}
export const createExpense = async ({ data }: { data: CreateExpense }) => {
  try {
    await prisma.expense.create({
      data: {
        title: data.title,
        amount: data.amount,
        date: data.date,
        monthName: data.month,
        year: data.year,
        description: data.description
      }
    })
    return NextResponse.json({ message: 'Entry added successfully', status: 200 })

  } catch (err) {
    console.log(err)
    return NextResponse.json({ errors: err, status: 500 })
  }
}


