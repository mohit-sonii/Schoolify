import { incomeType } from "../Profit/Functions";
import { expenseType } from "./Functions";

export const years = [2024, 2023, 2022, 2021, 2020];

export const refineResult = (
  data: expenseType[] | incomeType[],
  year: number,
  month: string,
  inputText?: string,
  sortOrder?: string
) => {
  let res = data.filter((val) => {
    const yearMatch = year ? val.year == year : true;
    const monthMatch = month.length > 0 ? val.month === month : true;
    return yearMatch && monthMatch;
  });
  if (inputText) res = res.filter((val) => val.title.toLowerCase().includes(inputText.toLowerCase()));
  if (sortOrder === "least")
    res.sort((a, b) => a.amount - b.amount)
  if (sortOrder === "high")
    res.sort((a, b) => b.amount - a.amount)
  return res;
};
