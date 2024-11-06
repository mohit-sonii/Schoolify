"use client";

import { ChangeEvent, useEffect, useState } from "react";
import {
  StudentTable,
  classNames,
  admissionYears,
  monthNames,
} from "./TableType";
import {
  FilterWorking,
} from "./FilterFunctions";

export const Table = ({ students }: { students: StudentTable[] }) => {
  const [optionClass, setOptionClass] = useState<string>("");
  const [optionAdmission, setOptionAdmission] = useState<number | undefined>(undefined);
  const [optionFees, setOptionFees] = useState<string>("");
  const [filterResult, setFilterResults] = useState<StudentTable[]>([])

  const ChangeForClass = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionClass(e.target.value);
  };
  const ChangeForAdmission = (e: ChangeEvent<HTMLSelectElement>) => {
    const admissionValue = parseInt(e.target.value, 10);
    setOptionAdmission(admissionValue === 1 ? undefined : admissionValue);
  };
  const ChangeForFees = (e: ChangeEvent<HTMLSelectElement>) => {
    setOptionFees(e.target.value);
  };

  useEffect(() => {
    const result = FilterWorking(students, optionFees, optionAdmission, optionClass)
    setFilterResults(result)
  }, [students, optionFees, optionAdmission, optionClass]);

  return (
    <div className="w-full  h-max flex mb-4 show-table rounded-lg shadow-lg flex-col gap-2">
      <div className="flters w-full p-4 flex  gap-4 items-center">
        <h1 className="font-semibold text-gray-600 text-sm">Filters</h1>
        {/*First Filter for Class*/}
        <div>
          <select
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => ChangeForClass(e)}
          >
            <option value="" className="font-light text-xs text-gray-500">
              Class
            </option>
            {classNames.map((val) => (
              <option
                key={val}
                value={val}
                className="text-xs font-light text-gray-500"
              >
                {val}
              </option>
            ))}
          </select>
        </div>
        {/* Second Filter for Admission Year */}
        <div>
          <select
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => ChangeForAdmission(e)}
          >
            <option value={1} className="font-light text-xs text-gray-500">
              Admission Year
            </option>
            {admissionYears.map((val) => (
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
        {/* Third Filter for outstanding Fees */}
        <div>
          <select
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => ChangeForFees(e)}
          >
            <option value={""} className="font-light text-xs text-gray-500">
              Last Paid fees
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
      </div>
      <table className="min-w-full bg-white  border-gray-300 rounded-lg">
        <thead className="font-semibold text-xs text-gray-700">
          <tr>
            <th>Student Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Contact No.</th>
            <th>Admission Year</th>
            <th>Class</th>
            <th>Last Paid</th>
            <th>Outstanding Fees</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          {filterResult.length > 0
            ? filterResult.map((val: any) => (
              <tr key={val.Username} className="text-center">
                <td>{val.StudentId}</td>
                <td>{val["First Name"]}</td>
                <td>{val["Last Name"]}</td>
                <td>{val["Contact No"]}</td>
                <td>{val["Admission Year"]}</td>
                <td>{val.Class}</td>
                <td>{val["Last Fees Paid"]}</td>
                <td>{val["Outstanding Fees"]}</td>
              </tr>
            ))
            : (
              <tr className="w-full">
                <td className="text-center">No students match the selected criteria.</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};

