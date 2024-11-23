"use client";

import React, { ChangeEvent, useState, useEffect } from "react";
import Button from "../Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { classes } from "../Extra";
import { fetchSubjectForClass, resultData, resultDataType } from "./Functions";

function Row({
  row,
  classname,
  subjectname,
  monthname,
}: {
  row: resultDataType;
  classname: string;
  subjectname: string;
  monthname: string;
}) {
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          {classname.replace("class_", "").concat("th")}
        </TableCell>
        <TableCell align="left">{row.firstname}</TableCell>
        <TableCell align="left">{row.lastname}</TableCell>
        <TableCell align="left">{monthname}</TableCell>
        <TableCell align="left">{subjectname}</TableCell>
        <TableCell
          align="left"
          className={`font-semibold ${
            row.score >= 70
              ? "text-green-700"
              : row.score >= 45
              ? "text-yellow-700"
              : row.score >= 34
              ? "text-gray-700"
              : "text-red-700"
          }`}
        >
          {row.score}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const ResultTable = ({ subjects }: { subjects: string[] }) => {
  const [monthname, setMonthname] = useState<string>("May");
  const [classname, setClassname] = useState<string>("class_12");
  const [subjectList, setSubjectList] = useState<string[]>(subjects);
  const [subjectname, setSubjectname] = useState<string>(subjects[0]);
  const [visible, setVisible] = useState<boolean>(false);
  const [mapping, setMapping] = useState<resultDataType[] | null>();

  const changeForMonth = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setMonthname(val);
  };
  const changeForSubject = async (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSubjectname(val);
  };
  const changeForClass = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setClassname(value);
    const result = await fetchSubjectForClass(value);
    setSubjectList(result);
  };

  useEffect(() => {
    const data = async () => {
      const result = await resultData(classname, monthname, subjectname);
      setMapping(result);
      if (result == null || result.length == 0) setVisible(true);
      else {
        setVisible(false)
      }
    };
    data();
  }, [monthname,subjectname,classname]);
  return (
    <div className="flex flex-col w-full mb-5 gap-5">
      <div className="flex justify-between gap-3 flex-wrap">
        <h1 className="text-sm font-bold ">All Results</h1>
        <Button innerText="Add Result" />
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex flex-col gap-1">
          <label htmlFor="classname" className="font-light text-xs">
            Class
          </label>
          <select
            name="classname"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => changeForClass(e)}
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
          <label htmlFor="subjectname" className="font-light text-xs">
            Subject
          </label>
          <select
            name="subjectname"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => changeForSubject(e)}
          >
            {subjectList.map((val) => (
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
          <label htmlFor="monthname" className="font-light text-xs">
            Month
          </label>
          <select
            name="monthname"
            className="font-light text-xs rounded-md shadow-xl px-4 py-2 border-none outline-none cursor-pointer"
            onChange={(e) => changeForMonth(e)}
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
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Month of Exam</TableCell>
              <TableCell align="left">Subject</TableCell>
              <TableCell align="left">Score</TableCell>
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
              mapping.map((row, index) => (
                <Row
                  key={index}
                  row={row}
                  classname={classname}
                  monthname={monthname}
                  subjectname={subjectname}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultTable;
