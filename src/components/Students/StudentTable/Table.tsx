"use client";

import { ChangeEvent, useEffect, useState } from "react";
import {
  StudentTable,
  classNames,
  admissionYears,
  monthNames,
} from "./TableType";
import {
  FilterSort,
} from "./FilterFunctions";

export const Table = ({ students }: { students: StudentTable[] }) => {
  const [optionClass, setOptionClass] = useState<string>("");
  const [optionAdmission, setOptionAdmission] = useState<number | undefined>(undefined);
  const [optionFees, setOptionFees] = useState<string>("");
  const [filterResult, setFilterResults] = useState<StudentTable[]>([])
  const [sortingAdmissionValue, setSortingAdmission] = useState<string>("")
  const [sortingFeesValue, setSortingFees] = useState<string>("")

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
  const changeForAdmissionSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortingAdmission(e.target.value)
  }
  const changeForFeesSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortingFees(e.target.value)
  }

  useEffect(() => {
    const result = FilterSort(students, optionFees, optionAdmission, optionClass, sortingAdmissionValue, sortingFeesValue)
    setFilterResults(result)
  }, [students, optionFees, optionAdmission, optionClass, sortingAdmissionValue, sortingFeesValue]);

  return (
    <div className="w-full  h-max flex mb-4 show-table rounded-lg shadow-lg flex-col gap-2">
        {/*filtering*/}
      <div className="w-full p-2 flex  gap-4 items-center">
        <p className="font-semibold text-gray-700 text-xs ">Filters</p>
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
      {/* Sorting */}
      <div className="w-full p-2 flex  gap-4 items-center">
        <p className="font-semibold text-gray-700 text-xs ">Sort by :</p>
        {/*Sorting by admission Year */}
        <select className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer" onChange={(e) => changeForAdmissionSort(e)}>
          <option className="text-xs text-gray-500 font-light" value={sortingAdmissionValue}>Admission Year --</option>
          <option className="text-xs text-gray-500 font-light" value="oldest">Oldest Admission First</option>
          <option className="text-xs text-gray-500 font-light" value="newest">Newest Admission First</option>
        </select>
        {/*Sorting by Outstanding Fees Balance */}
        <select className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer" onChange={(e) => changeForFeesSort(e)}>
          <option className="text-xs text-gray-500 font-light " value="">Outstanding Fees --</option>
          <option className="text-xs text-gray-500 font-light" value="highest">Highest First</option>
          <option className="text-xs text-gray-500 font-light" value="lowest">Lowest First</option>
        </select>
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

