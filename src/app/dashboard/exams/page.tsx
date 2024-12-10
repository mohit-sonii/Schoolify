// import ExamTable from '@/components/Exams/ExamTable'
// import { findExams } from '@/components/Exams/Functions'
// import { Divider } from '@mui/material'
import React from 'react'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schoolify | Exams",
  description: "exams",
};
 

// const page = async () => {
//   await findExams("May", "class_12")
//   return (
//     <div className="flex flex-col gap-5">
//       <h1 className="font-bold text-xl">Exams</h1>
//       <Divider />
//       <div className="w-full ">
//         <ExamTable />
//       </div>
//     </div>
//   )
// }
const page = () => {
  return (
    <>
      Page is under Production
    </>
  )
}

export default page