"use client"
import { useState, useEffect, ChangeEvent } from 'react'
import { getOutstandingTotal } from './Functions'
import { classes, months } from '../Extra'


const ClassOutstandingFees = ({ fees }: { fees: number }) => {
  const [optionValue, setOptionValue] = useState<string>("class_12")
  const [monthName, setMonthName] = useState<string>("")
  const [total, setTotal] = useState<number>(fees)

  const handleChangeClass = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setOptionValue(val)
    const res = await getOutstandingTotal(val, monthName);
    setTotal(res);
  }

  const handleChangeMonth = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setMonthName(val)
    const res = await getOutstandingTotal(optionValue, val)
    setTotal(res)
  }

  return (
    <div className="w-full  flex flex-col gap-5">
      <div className="flex flex-col gap-3  w-full">
        <h3 className="text-sm font-semibold text-gray-900 flex flex-col">
          Total Outstanding Fees
        </h3>
        <div className="flex flex-wrap justify-end gap-3">
          <select
            className="font-light text-xs rounded-md items-center shadow-xl px-4 py-2 w-max border-none outline-none cursor-pointer"
            onChange={(e) => handleChangeClass(e)}
          >
            {classes.map((val) => (
              <option
                key={val}
                value={`${val}`}
                className="text-xs font-light text-gray-500"
              >
                {val.replace("class_", "").concat("th")}
              </option>
            ))}
          </select>
          <select
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none w-max outline-none cursor-pointer"
            onChange={(e) => handleChangeMonth(e)}
          >
            <option
              value={""}
              className="text-xs font-light text-gray-500"
            >
              Month --
            </option>
            {months.map((val) => (
              <option
                key={val}
                value={`${val}`}
                className="text-xs font-light text-gray-500"
              >
                {val}
              </option>
            ))}
          </select>
        </div>

      </div>
      {total > 0 ?
        <h1 className="w-max text-2xl font-bold text-red-600">{`$${total}`}</h1>
        : <span className="text-xs font-light text-gray-600">No Pending Dues!!</span>
      }
    </div>
  )
}
export default ClassOutstandingFees