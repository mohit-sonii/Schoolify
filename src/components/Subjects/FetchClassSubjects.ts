
"use server"

import prisma from "@/utils/db"
import { $Enums } from "@prisma/client"

export const FetchClassSubjects = async (): Promise<{ classname: string, subjectList: string[] }[]> => {
  const result: { classname: string, subjectList: string[] }[] = await prisma.class.findMany({
    select: {
      id: true,
      subjects: true
    }
  }).then((res) => {
    const ans = res.map((val) => (
      {
        classname: val.id as string,
        subjectList: val.subjects.flatMap(x => x.subjectName)
      }
    ))
    return ans
  })

  return result
}

export const FetchClassSubjectAccToProp = async (classname: string):Promise<string[]> => {
  const subjects:string[] = []
  await prisma.class.findFirst({
    where: {
      id: "class_" + classname.replace("th","") as $Enums.ClassList
    },
    select: {
      subjects: {
        select: {
          subjectName: true
        }
      }
    }
  }).then((res) => {
    if(res) res.subjects.map((val) => subjects.push(val.subjectName))
  })
  return subjects
}