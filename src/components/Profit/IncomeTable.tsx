"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { years } from "./objectExport";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { useState, useEffect, ChangeEvent } from "react";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { expenseType } from "./Functions";
import { refineResult } from "./objectExport";
import Button from "../Button";
import { monthNames } from "../Students/StudentTable/TableType";
import Image from "next/image";

//each row
function Row(props: { row: expenseType }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.month}</TableCell>
        <TableCell align="right">{row.year}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant="body2">{row.description}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function IncomeTable({
  gain,
}: {
  gain: expenseType[];
}) {
  const currentYear = new Date().getFullYear();
  const [yearMonth, setYearMonth] = useState<{ year: number; month: string }>({
    year: 0,
    month: "",
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [mapping, setMapping] = useState<expenseType[] | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("");
  const optionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setYearMonth((prev) => {
      const updatedState = { ...prev, [name]: value };
      const response = refineResult(
        expenditure,
        yearMonth.year,
        yearMonth.month
      );
      if (response.length === 0) setVisible(true);
      else setVisible(false);
      setMapping(response);
      return updatedState;
    });
  };
  const handleClick = () => {
    const response = refineResult(
      expenditure,
      yearMonth.year,
      yearMonth.month,
      inputValue
    );
    setMapping(response);
    if (response.length === 0) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    const response = refineResult(
      expenditure,
      yearMonth.year,
      yearMonth.month,
      "",
      sortOrder
    );
    setMapping(response);
    if (response.length === 0) setVisible(true);
    else setVisible(false);
  }, [yearMonth, expenditure, sortOrder]);

  return (
    <div className="flex flex-col w-full gap-5 mb-5">
      <h1 className="text-sm font-bold ">Expenses Details</h1>
      <Button innerText="Add new Expense" />
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
              <TableCell />
              <TableCell>Expense Title</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Month</TableCell>
              <TableCell align="right">Year</TableCell>
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
            {mapping && mapping.map((row) => <Row key={row.title} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
