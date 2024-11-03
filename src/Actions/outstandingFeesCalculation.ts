import prisma from "@/utils/db"


export const feesResult = prisma.student.findMany({
  select: {
    studentId: true,
    feesPaidUpto: true,
    class: {
      select: {
        id:true,
        fees: {
          select: {
            amount: true
          }
        }
      }
    }
  }
}).then((res)=>{
  const arr = res.map((val)=>{
    return{
      studentId:val.studentId,
      feesPaidUpto:val.feesPaidUpto,
      class:val.class.id.replace("class_","").concat(" std."),
      amount:val.class.fees[0].amount
    }
  })
  return {
    arr
  }
})
