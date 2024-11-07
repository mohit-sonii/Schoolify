"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  StudentTable,
  classNames,
  admissionYears,
  monthNames,
} from "./TableType";
import {
  FilterSort,
} from "./FilterFunctions";
import Image from "next/image";

export const Table = ({ students }: { students: StudentTable[] }) => {

  const [optionClass, setOptionClass] = useState<string>("");
  const [optionAdmission, setOptionAdmission] = useState<number | undefined>(undefined);
  const [optionFees, setOptionFees] = useState<string>("");
  const [filterResult, setFilterResults] = useState<StudentTable[]>([])
  const [sortingAdmissionValue, setSortingAdmission] = useState<string>("")
  const [sortingFeesValue, setSortingFees] = useState<string>("")
  const [inputText, setInputText] = useState<string>("")

  const router = useRouter()

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

  const handleClick = () => {
    const result = FilterSort(students, "", undefined, "", "", "", inputText)
    setFilterResults(result)
  }

  useEffect(() => {
    const result = FilterSort(students, optionFees, optionAdmission, optionClass, sortingAdmissionValue, sortingFeesValue,inputText)
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
        <div className="flex items-center  gap-2 justify-end">
          <input value={inputText} name="search" type="text" className="rounded-md shadow-lg border-none outline-none text-xs font-light p-2 w-[150px]" placeholder="search..." onChange={(e:ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
          <button className="p-2 shadow-md outline-none border-none text-xs cursor-pointer rounded-md bg-white" onClick={() => handleClick()}>
            <Image width={14} height={14} alt="search" src="/search.svg" />
          </button>
        </div>
      </div>
      <table className="min-w-full bg-white  border-gray-300 rounded-lg">
        <thead className="font-semibold text-xs text-gray-700">
          <tr>
            <th className="hover:font-bold hover:text-black">Student Id</th>
            <th className="hover:font-bold hover:text-black">First name</th>
            <th className="hover:font-bold hover:text-black">Last name</th>
            <th className="hover:font-bold hover:text-black">Contact No.</th>
            <th className="hover:font-bold hover:text-black">Admission Year</th>
            <th className="hover:font-bold hover:text-black">Class</th>
            <th className="hover:font-bold hover:text-black">Last Paid</th>
            <th className="hover:font-bold hover:text-black">Outstanding Fees</th>
          </tr>
        </thead>
        <tbody className="text-xs font-medium text-gray-600">
          {filterResult.length > 0
            ? filterResult.map((val: any) => (
              <tr key={val.Username} className="text-center">
                <td onClick={() => router.push(`/students/${val.StudentId.toString()}`)} className="cursor-pointer hover:font-bold hover:text-black">{val.StudentId}</td>
                <td className="hover:font-bold hover:text-black">{val["First Name"]}</td>
                <td className="hover:font-bold hover:text-black">{val["Last Name"]}</td>
                <td className="hover:font-bold hover:text-black">{val["Contact No"]}</td>
                <td className="hover:font-bold hover:text-black">{val["Admission Year"]}</td>
                <td className="hover:font-bold hover:text-black">{val.Class}</td>
                <td className="hover:font-bold hover:text-black">{val["Last Fees Paid"]}</td>
                <td className="hover:font-bold hover:text-black">{val["Outstanding Fees"]}</td>
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

