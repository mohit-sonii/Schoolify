"use client"

import { Month } from "@prisma/client"

type StudentTable = {
  studentId: number
  username: string
  firstname: string
  lastname: string
  mothername?: string
  fathername?: string
  gender?: 'Male' | 'Female'
  contactNo?: string
  address?: string
  feesPaidUpto?: Month
  admissionYear?: number
  passedOutYear?: number
  class?: string
}

export default function Table({ students }: { students: StudentTable[] }) {
  return (
    <div className="w-full overflow-x-scroll h-max flex container  show-table rounded-lg shadow-lg">
      <table className="min-w-full bg-white  border-gray-300 rounded-lg">
        <thead className="font-semibold text-xs text-gray-700">
          <tr>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact No.</th>
            <th>Admission Year</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          {students.map((val: any) => (
            <tr key={val.username} className="text-center">
              <td>{val.studentId}</td>
              <td>{val.firstname}</td>
              <td>{val.lastname}</td>
              <td>{val.contactNo}</td>
              <td>{val.admissionYear}</td>
              <td>{val.class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}