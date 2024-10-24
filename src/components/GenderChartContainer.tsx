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
    <div className="w-full h-[500px]">
      <GenderChart boys={boys} girls={girls} />
    </div>
    </>
  )
}

export default GenderChartContainer