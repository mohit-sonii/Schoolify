import React from 'react'
import { monthNames } from '../Students/StudentTable/TableType'

const TotalCollectionFromFees = () => {
  return (
    <div className='w-full  flex flex-col gap-5'>
      <div className="flex justify-between items-center w-full">
        <h3 className='text-sm font-semibold text-gray-900 flex flex-col'>
          Total Fees Collection
          <span className="text-[10px] font-light text-gray-500">All Classes</span>
        </h3>
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
        >
          <option value={""} className="font-light text-xs text-gray-500">
            Select Month
          </option>
          {monthNames.map((val) => (
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
      <h1 className="w-max text-2xl font-bold text-black">$1245478</h1>
    </div>
  )
}

export default TotalCollectionFromFees