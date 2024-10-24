import prisma from '@/utils/db'
import React from 'react'

const Cards = async ({ type }: {
  type: 'admin' | 'teacher' | 'student'
}) => {
  const modelMap: Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student
  }
  const data = await modelMap[type].count()
  return (
    <div className="rounded-lg flex min-w-[150px] odd:bg-purple even:bg-yellow p-4">
      <div className="flex flex-col gap-3">
        <span className="text-light font-light text-sm">{type}</span>
        <div className="flex flex-col ">
          <h1 className="font-bold text-2xl text-gray-800">{data}</h1>
          {/* <h1 className="font-bold text-2xl text-gray-800">1024</h1> */}
          <h2 className="font-light text-xs text-gray-400">Total {type}s</h2>
          {/* <h2 className="font-light text-xs text-gray-400">Total Students</h2> */}
        </div>
      </div>
    </div>
  )
}

export default Cards