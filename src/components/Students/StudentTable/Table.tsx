"use client"

import { ChangeEvent } from "react"
import { StudentTable } from "./TableType"
import { useState } from 'react'
import Image from 'next/image'


export default function Table({ students }: { students: StudentTable[] }) {

  const [currentOption, setCurrentOption] = useState("")

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentOption(e.target.value)
  }

  return (
    <div className="w-full overflow-x-scroll h-max flex container mb-4 show-table rounded-lg shadow-lg flex-col gap-2">
      <div className="w-full text-xs justify-end  gap-2 flex items-center">
        <Image
          src="/filter.svg"
          alt=""
          width={14}
          height={14}
        />
        <label htmlFor="fields" className="font-semibold text-gray-700">
          Filter
        </label>
        <select name="fields" id="fields" className="border-none outline-none px-4 py-2 rounded-lg shadow-lg text-gray-500" onChange={handleChange}>
          {Object.entries(students[0]).map(([val, _]) => (
            <option key={val} value={val}>{val}</option>
          ))}
        </select>
      </div>
      <table className="min-w-full bg-white  border-gray-300 rounded-lg">
        <thead className="font-semibold text-xs text-gray-700">
          <tr>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact No.</th>
            <th>Class</th>
            <th>{currentOption}</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          {students.map((val: any, idx: number) => (
            <tr key={val.Username} className="text-center">
              <td>{val.StudentId}</td>
              <td>{val["First Name"]}</td>
              <td>{val["Last Name"]}</td>
              <td>{val["Contact No"]}</td>
              <td>{val.Class}</td>
              <td>{val[`${currentOption}`]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}