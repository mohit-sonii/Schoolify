"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { useState, useEffect, ChangeEvent } from "react";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { teacherType } from "./Functions";
import { monthNames } from "../Students/StudentTable/TableType";
import Image from "next/image";
import { refining, years } from "./refining";
import { useRouter } from "next/navigation";

//each row

function Row(props: { row: teacherType }) {
  const { row } = props;
  const router = useRouter();

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell
          component="th"
          scope="row"
          onClick={() => router.push(`/teachers/${row.username}`)}
          className="cursor-pointer hover:font-semibold text-black"
        >
          {row.username}
        </TableCell>
        <TableCell align="left">{row.fullName}</TableCell>
        <TableCell align="left">{row.joiningDate}</TableCell>
        <TableCell align="left">{row.joiningMonth}</TableCell>
        <TableCell align="left">{row.joiningYear}</TableCell>
        <TableCell align="left">{row.qualification}</TableCell>
        <TableCell align="left">{row.salary}</TableCell>
        <TableCell align="left">{row.servedTill}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TeacherTable({
  teachers,
}: {
  teachers: teacherType[];
}) {
  const [yearMonth, setYearMonth] = useState<{ year: number; month: string }>({
    year: 0,
    month: "",
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [mapping, setMapping] = useState<teacherType[] | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("");

  const optionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setYearMonth((prev) => {
      const updatedState = { ...prev, [name]: value };
      const response = refining(teachers, yearMonth.year, yearMonth.month);
      if (response.length === 0) setVisible(true);
      else setVisible(false);
      setMapping(response);
      return updatedState;
    });
  };

  const handleClick = () => {
    const response = refining(
      teachers,
      yearMonth.year,
      yearMonth.month,
      inputValue
    );
    setMapping(response);
    if (response.length === 0) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    const response = refining(
      teachers,
      yearMonth.year,
      yearMonth.month,
      "",
      sortOrder
    );
    setMapping(response);

    if (response.length === 0) setVisible(true);
    else setVisible(false);
  }, [yearMonth, teachers, sortOrder]);

  return (
    <div className="flex flex-col w-full gap-5 mb-5">
      <h1 className="text-sm font-bold ">Teacher Details</h1>
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex flex-col gap-1">
          <label htmlFor="year" className="font-light text-xs">
            Year
          </label>
          <select
            name="year"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => optionChange(e)}
          >
            <option className="font-light text-xs text-gray-500" value="">
              Select Year
            </option>
            {years.map((val) => (
              <option
                className="font-light text-xs text-gray-500"
                key={val}
                value={val}
              >
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="month" className="font-light text-xs">
            Month
          </label>
          <select
            name="month"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => optionChange(e)}
          >
            <option className="font-light text-xs text-gray-500" value="">
              Select Month
            </option>
            {monthNames.map((val) => (
              <option
                className="font-light text-xs text-gray-500"
                key={val}
                value={val}
              >
                {val}
              </option>
            ))}
          </select>
        </div>
        <div className="flex  gap-1 flex-col">
          <label htmlFor="search" className="font-light text-xs">
            Search...
          </label>
          <div className="flex gap-2 flex-row ">
            <input
              value={inputValue}
              name="search"
              type="text"
              className="rounded-md shadow-lg border-none outline-none text-xs font-light p-2 w-[150px]"
              placeholder="search by title..."
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <button
              className="p-2 shadow-md outline-none border-none text-xs cursor-pointer rounded-md bg-white w-max"
              onClick={() => handleClick()}
            >
              <Image width={14} height={14} alt="search" src="/search.svg" />
            </button>
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <label htmlFor="sort" className="font-light text-xs">
            Sort By...
          </label>
          <select
            name="sort"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option className="text-xs text-gray-500 font-light" value="">
              Select --
            </option>
            <option className="text-xs text-gray-500 font-light" value="least">
              Least Amount
            </option>
            <option className="text-xs text-gray-500 font-light" value="high">
              Highest Amount
            </option>
          </select>
        </div>
      </div>

      <TableContainer
        component={Paper}
        className="bg-gray-100 border shadow-xl rounded-xl border-gray-400"
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Joining Date</TableCell>
              <TableCell align="left">Joining Month</TableCell>
              <TableCell align="left">Joining Year</TableCell>
              <TableCell align="left">Qualification</TableCell>
              <TableCell align="left">Salary</TableCell>
              <TableCell align="left">Served Till</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visible && (
              <TableRow>
                <TableCell align="left" colSpan={5}>
                  No data for this criteria
                </TableCell>
              </TableRow>
            )}
            {mapping &&
              mapping.map((row) => <Row key={row.username} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
