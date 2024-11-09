import prisma from "@/utils/db"
import { EachStudent } from "./EachStudentTypes"

export const StudentData = async (user: string): Promise<[EachStudent | any, number,string]> => {
  const res = await prisma.$transaction([
    prisma.student.findFirst({
      where: {
        username: user
      },
      select: {
        studentId: true,
        username: true,
        firstname: true,
        lastname: true,
        contactNo: true,
        admissionYear: true,
        classId: true,
        motherName: true,
        fatherName: true,
        gender: true,
        address: true,
        feesPaidUpto: true,
        passedOutYear: true,
        class: {
          select: {
            id: true,
            group: true,
            teacher: {
              select: {
                firstname: true,
                lastname: true
              }
            },
            exam: {
              select: {
                classId: true,
                subjectId: true
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
            }
          },
        },
        attendance: {
          select: {
            present: true,
            date: true
          }
        },
        result: {
          select: {
            score: true,
            examId: true,
            stuId: true
          }
        }
      }
    }),
    prisma.student.count({
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
    }),
    prisma.student.findUnique({
      where: {
        username: user
      },
      select: {
        class: {
          select: {
            group:true
          }
        }
      }
    })
  ]
  )
  return res
}
