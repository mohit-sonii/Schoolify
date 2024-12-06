import AnnualyChart from '@/components/Expenses/AnnualyChart'
import ExpenseTable from '@/components/Expenses/ExpenseTable'
import { getAllData } from '@/components/Expenses/Functions'
import { Divider } from '@mui/material'
import React from 'react'

const page = async () => {
  const result = await getAllData()
  return (
    <div className="flex flex-col gap-5 relative">
      <h1 className="font-bold text-xl">Expenses</h1>
      <Divider />
      <AnnualyChart />
      <Divider />
      <ExpenseTable expenditure={result} />
      <Divider />
    </div>
  )
}

export default page