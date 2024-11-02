import prisma from "@/utils/db";
import OutstandingDues from "./OutstandingDues"


const OutstandingDuesContainer = async () => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const getMonth = new Date().getMonth();

  const classId: number[] = []
  const totalStudent: number[] = []

  await prisma.class.findMany({
    select: {
      id: true,
      totalStudents: {
        select: {
          feesPaidUpto: true,
        }
      }
    }
  }).then((res) => {
    return res.map((value) => {
      const className = parseInt(value.id.replace("class_", ""))
      const count = value.totalStudents.filter(element => {
        const month = months.indexOf(element.feesPaidUpto)
        return month + 1 < getMonth
      }).length
      classId.push(className)
      totalStudent.push(count)
      return {
        classId,
        totalStudent
      }
    })
  })

  return (
    <div className="w-full flex flex-wrap gap-2">
      <div className="flex flex-col justify-center w-full gap-3 ">
        <h1 className="font-semibold text-gray-600 ">Outstanding Dues Count</h1>
        <span className="text-xs font-light">Class-wise Analysis</span>
      </div>
      <OutstandingDues classes={classId} students={totalStudent} />
    </div>
  )
}

export default OutstandingDuesContainer