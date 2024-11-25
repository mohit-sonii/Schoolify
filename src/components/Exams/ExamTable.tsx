"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { classes } from "../Extra";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { useState, useEffect, ChangeEvent } from "react";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { examReturn, findExams } from "./Functions";
import Button from "../Button";

//each row
function Row(props: { row: examReturn }) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          {row.classId.replace("class_", "").concat("th")}
        </TableCell>
        <TableCell align="left">{row.subjectname}</TableCell>
        <TableCell align="left">{row.date}</TableCell>
        <TableCell align="left">{row.monthname}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ExamTable() {
  const [classWithMonth, SetClassWithMonth] = useState<{
    monthname: string;
    classname: string;
  }>({
    monthname: "May",
    classname: "class_12",
  });
  const [mapping, setMapping] = useState<examReturn[] | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const optionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    SetClassWithMonth((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const result = await findExams(
          classWithMonth.monthname,
          classWithMonth.classname
        );
        setMapping(result);
        setVisible(result === null || result.length === 0);
      } catch (error) {
        console.error("Error fetching exams:", error);
        setMapping(null);
        setVisible(true);
      }
    };
    fetchExams();
  }, [classWithMonth]);

  return (
    <div className="flex flex-col w-full gap-5 mb-5">
      <div className="flex justify-between gap-3 flex-wrap">
        <h1 className="text-sm font-bold ">Exam Details</h1>
        <Button innerText="Create Exam" />
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex flex-col gap-1">
          <label htmlFor="classname" className="font-light text-xs">
            Class
          </label>
          <select
            name="classname"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => optionChange(e)}
          >
            {classes.map((val) => (
              <option
                className="font-light text-xs text-gray-500"
                key={val}
                value={val}
              >
                {val.replace("class_", "").concat("th")}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="monthname" className="font-light text-xs">
            Month
          </label>
          <select
            name="monthname"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => optionChange(e)}
          >
            <option className="font-light text-xs text-gray-500" value="May">
              May
            </option>
            <option
              className="font-light text-xs text-gray-500"
              value="September"
            >
              September
            </option>
            <option
              className="font-light text-xs text-gray-500"
              value="December"
            >
              December
            </option>
            <option className="font-light text-xs text-gray-500" value="March">
              March
            </option>
          </select>
        </div>
      </div>

      <TableContainer
        component={Paper}
        className="bg-gray-100 border shadow-xl w-full rounded-xl border-gray-400"
      >
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Class</TableCell>
              <TableCell align="left">Subject Name</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Month</TableCell>
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
              mapping.map((row) => <Row key={row.subjectname} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
