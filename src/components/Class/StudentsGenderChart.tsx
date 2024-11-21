"use client"
import React from 'react'
import GenderChart from '../Admin/GenderPieChart/GenderChart'
import { useState, ChangeEvent } from 'react'
import { classes } from '../Extra'
import { countStudents } from './Functions'

const StudentsGenderChart = ({ total, boys, girls }: { total: number, boys: number, girls: number }) => {

  const [optionValue, setOptionValue] = useState<string>("")
  const [totalStudents, setTotalStudents] = useState<number>(total)
  const [totalBoys, setTotalBoys] = useState<number>(boys)
  const [totalGirls, setTotalGirls] = useState<number>(girls)

  const optionChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const changed = e.target.value
    setOptionValue(changed)
    const ans = await countStudents(changed)
    setTotalStudents(ans.total)
    setTotalBoys(ans.boys)
    setTotalGirls(ans.girls)
  }


  return (
    <div className="w-full h-max flex flex-col gap-4 ">
      <div className="flex flex-col justify-center gap-1">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-700 flex flex-col">Total Students</h1>
          <select
            name="Class"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => optionChange(e)}
          >
            {classes.map((val) => (
              <option
                className="font-light text-xs text-gray-500"
                key={val}
                value={val.replace("class_", "").concat("th")}
              >
                {val.replace("class_", "").concat("th")}
              </option>
            ))}
          </select>
        </div>
        <span className="text-2xl font-bold">{totalStudents}</span>
        <div className="text-xs w-full flex  items-center gap-2 ">
          <p className=" font-normal text-[#8A89CC]">Boys - <span className="font-semibold">{totalBoys}</span></p>
          <p className=" font-normal text-[#7D6CA8]">Girls - <span className="font-semibold">{totalGirls}</span></p>
        </div>
      </div>
      <GenderChart boys={totalBoys} girls={totalGirls} />
    </div>
  )
}

export default StudentsGenderChart