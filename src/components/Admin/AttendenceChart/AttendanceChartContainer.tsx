"use server"

import React from 'react'
import AttendanceChart from './AttendanceChart'
import prisma from '@/utils/db'
const AttendanceChartContainer = async () => {

  const data = await prisma.$transaction([
    prisma.attendance.count({
      where: {
        present: true
      }
    }),
    prisma.attendance.count()
  ])
  
  return (
    <>
      <div className="w-full h-full flex flex-col gap-4 ">
        <div className="flex flex-col justify-center gap-1">
          <div className='flex justify-between items-center'>
            <h1 className="font-semibold  text-gray-700 flex flex-col">Today&apos;s Attendance</h1>
          </div>
          <span className="text-2xl font-bold">{data[1]}</span>
          <div className="text-xs w-full flex  items-center gap-2 ">
            <p className=" font-light text-gray-600">Present <span className="font-semibold">{data[0]}</span></p>
            <p className=" font-light text-gray-600">Absent <span className="font-semibold">{data[1] - data[0]}</span></p>
          </div>
        </div>
        <AttendanceChart present={data[0]} total={data[1]} />
      </div>
    </>
  )
}

export default AttendanceChartContainer