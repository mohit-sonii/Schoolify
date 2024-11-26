"use server"

import prisma from "@/utils/db"
import TotalStudents from "./TotalStudents"

const TotalStudentsContainer = async () => {

  const result = await prisma.class.groupBy({
    by: ["id"],
    _count: true
  }).then((res) => {
    const arr = res.map((val) => {
      const filterClass = parseInt(val.id.replace("class_", ""))
      return {
        count: val._count,
        className: filterClass
      }
    })
    arr.sort((a, b) => a.className - b.className)
    return{
      arr
    }
  })

  return (
    <div className="w-full flex flex-col flex-wrap gap-2">
      <h1 className="font-semibold text-gray-800">Number of Students Per Class</h1>
      <TotalStudents range={result.arr} />
    </div>
  )
}

export default TotalStudentsContainer