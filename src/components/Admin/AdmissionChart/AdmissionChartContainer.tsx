"use server"

import prisma from "@/utils/db"
import AdmissionChart from "./AdmissionChart"

const AdmissionChartContainer = async () => {

  const result = await prisma.student.groupBy({
    by: ["admissionYear"],
    _count: true
  }).then((res) => {
    const arr = res.map((val) => ({
      admissionYear: val.admissionYear,
      count: val._count
    }))
    arr.sort((a: { admissionYear: number; count: number; }, b: { admissionYear: number; count: number; }) => a.admissionYear - b.admissionYear)

    return {
      arr
    }
  })
  return (
    <div className="w-full flex flex-col flex-wrap gap-2">
      <h1 className="font-semibold text-gray-600">Admission History</h1>
      <AdmissionChart range={result.arr} />
    </div>
  )
}

export default AdmissionChartContainer