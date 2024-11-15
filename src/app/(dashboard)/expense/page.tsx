import AnnualyChart from '@/components/Expenses/AnnualyChart'
import React from 'react'

const page = async () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Expenses</h1>
      <AnnualyChart/>

    </div>
  )
}

export default page