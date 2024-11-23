import ExamTable from '@/components/Exams/ExamTable'
import { findExams } from '@/components/Exams/Functions'
import { Divider } from '@mui/material'
import React from 'react'

const page = async () => {
  const result = await findExams("May", "class_12")
  console.log(result)
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Exams</h1>
      <Divider />
      <div className="w-full ">
        <ExamTable />
      </div>
    </div>
  )
}

export default page