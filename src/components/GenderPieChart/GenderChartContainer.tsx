import prisma from "@/utils/db"
import GenderChart from "./GenderChart"

const GenderChartContainer = async () => {

  const data = await prisma.student.groupBy({
    by: ["gender"],
    _count: true,
  })
  const boys = data.find((d) => d.gender === 'Male')?._count || 0
  const girls = data.find((d) => d.gender === 'Female')?._count || 0
  
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 ">
        <div className="flex flex-col justify-center gap-1">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-700 flex flex-col">Total Students</h1>
          </div>
          <span className="text-2xl font-bold">{boys + girls}</span>
          <div className="text-xs w-full flex  items-center gap-2 ">
            <p className=" font-light text-gray-600">Boys <span className="font-semibold">{boys}</span></p>
            <p className=" font-light text-gray-600">Girls <span className="font-semibold">{girls}</span></p>
          </div>
        </div>
        <GenderChart boys={boys} girls={girls} />
      </div>
    </>
  )
}

export default GenderChartContainer