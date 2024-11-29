
"use server"

import prisma from "@/utils/db"

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