"use client";
import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StudentTableSchema, classNames, admissionYears } from "./TableType";
import { months } from "@/components/Extra";
import { FilterSort } from "./FilterFunctions";
import Image from "next/image";
import Button from "@/components/Button";
import useModalStore from "@/utils/store";
import StudentForm from "@/components/AddPopUps/Students/StudentForm";
import { StudentsFetch } from "../FetchStudents";

export const StudentTable = () => {
  const [optionClass, setOptionClass] = useState<string>("");
  const [optionAdmission, setOptionAdmission] = useState<number | undefined>(
    undefined
  );
  const [students,setStudents] = useState<StudentTableSchema[]>([])
  const currValue = useModalStore((state) => state.studentRenderState);
  const [optionFees, setOptionFees] = useState<string>("");
  const [filterResult, setFilterResults] = useState<StudentTableSchema[]>([]);
  const [sortingAdmissionValue, setSortingAdmission] = useState<string>("");
  const [sortingFeesValue, setSortingFees] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const fetch = async () => {
      const result = await StudentsFetch();
      setStudents(result.arr)
    };
    fetch();
  }, [currValue]);

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
    setSortingAdmission(e.target.value);
  };
  const changeForFeesSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortingFees(e.target.value);
  };

  const handleClick = () => {
    const result = FilterSort(students, "", undefined, "", "", "", inputText);
    setFilterResults(result);
  };

  useEffect(() => {
    const result = FilterSort(
      students,
      optionFees,
      optionAdmission,
      optionClass,
      sortingAdmissionValue,
      sortingFeesValue,
      inputText
    );
    setFilterResults(result);
  }, [
    optionFees,
    optionAdmission,
    optionClass,
    students,
    sortingAdmissionValue,
    sortingFeesValue,
  ]);

  const openModal = useModalStore((state) => state.openModal);
  const studentPage = () => {
    openModal(<StudentForm />);
  };

  function Row(props: { row: StudentTableSchema }) {
    const { row } = props;
    const router = useRouter();

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell
            component="th"
            scope="row"
            onClick={() => router.push(`/students/${row.Username}`)}
            className="cursor-pointer hover:font-semibold text-black"
          >
            {row.StudentId}
          </TableCell>
          <TableCell align="left">{row["First Name"]}</TableCell>
          <TableCell align="left">{row["Last Name"]}</TableCell>
          <TableCell align="left">{row["Contact No"]}</TableCell>
          <TableCell align="left">{row["Admission Year"]}</TableCell>
          <TableCell align="left">{row.Class}</TableCell>
          <TableCell align="left">{row["Last Fees Paid"]}</TableCell>
          <TableCell align="left">{row["Outstanding Fees"]}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="w-full  h-max flex mb-4 show-table rounded-lg shadow-lg flex-col gap-2">
      <div className="flex w-full justify-end ">
        <Button innerText="Create Student" click={studentPage} />
      </div>
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
      {/* Sorting */}
      <div className="w-full p-2 flex  gap-4 items-center">
        <p className="font-semibold text-gray-700 text-xs ">Sort by :</p>
        {/*Sorting by admission Year */}
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
          onChange={(e) => changeForAdmissionSort(e)}
        >
          <option
            className="text-xs text-gray-500 font-light"
            value={sortingAdmissionValue}
          >
            Admission Year --
          </option>
          <option className="text-xs text-gray-500 font-light" value="oldest">
            Oldest Admission First
          </option>
          <option className="text-xs text-gray-500 font-light" value="newest">
            Newest Admission First
          </option>
        </select>
        {/*Sorting by Outstanding Fees Balance */}
        <select
          className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
          onChange={(e) => changeForFeesSort(e)}
        >
          <option className="text-xs text-gray-500 font-light " value="">
            Outstanding Fees --
          </option>
          <option className="text-xs text-gray-500 font-light" value="highest">
            Highest First
          </option>
          <option className="text-xs text-gray-500 font-light" value="lowest">
            Lowest First
          </option>
        </select>
        <div className="flex items-center  gap-2 justify-end">
          <input
            value={inputText}
            name="search"
            type="text"
            className="rounded-md shadow-lg border-none outline-none text-xs font-light p-2 w-[150px]"
            placeholder="search..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            className="p-2 shadow-md outline-none border-none text-xs cursor-pointer rounded-md bg-white"
            onClick={() => handleClick()}
          >
            <Image width={14} height={14} alt="search" src="/search.svg" />
          </button>
        </div>
      </div>
      <TableContainer
        component={Paper}
        className="bg-gray-100 border shadow-md rounded-xl border-gray-400"
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Student Id</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Contact No.</TableCell>
              <TableCell align="left">Admission Year</TableCell>
              <TableCell align="left">Class</TableCell>
              <TableCell align="left">Last Paid</TableCell>
              <TableCell align="left">Outstanding Fees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterResult.length === 0 && (
              <TableRow>
                <TableCell align="left" colSpan={5}>
                  No data for this criteria
                </TableCell>
              </TableRow>
            )}
            {filterResult &&
              filterResult.map((row) => <Row key={row.Username} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
