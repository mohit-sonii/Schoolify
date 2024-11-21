import prisma from "@/utils/db"
import { ClassData, Student } from "./EachStudentTypes"

export const StudentData = async (user: string): Promise<Student> => {
  return await prisma.student.findFirstOrThrow({
    where: {
      username: user
    },
    select: {
      studentId: true,
      username: true,
      firstname: true,
      lastname: true,
      contactNo: true,
      classId: true,
      motherName: true,
      fatherName: true,
      gender: true,
      address: true,
      feesPaidUpto: true,
    }
  })
}

export const countClass = async (user: string): Promise<number> => {
  const result = await prisma.student.count({
    where: {
      classId: (await prisma.student.findUnique({
        where: {
          username: user
        },
        select: {
          classId: true
        }
      }))?.classId
    }
  })
  return result
}


export const classData = async (user: string): Promise<ClassData | null> => {
  const studentId = await prisma.student.findUnique({
    where: {
      username:user
    },
    select: {
      studentId:true
    }
  })
  const result = await prisma.class.findUnique({
    where: {
      id: (await prisma.student.findUnique({
        where: {
          username: user
        },
        select: {
          classId: true
        }
      }))?.classId
    },
    select: {
      id: true,
      group: true,
      teacher: {
        select: {
          firstname: true,
          lastname: true
        }
      },
      subjects: {
        select: {
          subjectName: true,
          teacherUsername: true,
        }
      },
      fees: {
        select: {
          amount: true
        }
      },
      exams: {
        select: {
          monthname: true,
          subjectId:true,
          
          results: {
            where: {
              stuId: studentId?.studentId
            },
            select: {
              score: true,
            }
          }
        }
      }
    },
  })

  return result ? result : null
}


// export const studentResult = async (user: string): Promise<Result> => {
//   const res = await prisma.student.findFirst({
//     where: {
//       username: user
//     },
//     select: {
//       result: {
//         select: {
//           score: true,
//           examId: true,
//           examMonthId: true
//         }
//       }
//     }
//   })
//   return res?.result
// }

