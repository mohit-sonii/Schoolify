import { teacherType } from "./Functions";

export const years = [2024, 2023, 2022, 2021, 2020];

export const refining = (
  data: teacherType[],
  year: number,
  month: string,
  inputText?: string,
  sortOrder?: string
) => {
  let res = data.filter((val) => {
    const yearMatch = year ? val.joiningYear == year : true;
    const monthMatch = month.length > 0 ? val.joiningMonth === month : true;
    return yearMatch && monthMatch;
  });
  if (inputText)
    res = res.filter((val) =>
      val.fullName.toLowerCase().includes(inputText.toLowerCase())
    );
  if (sortOrder === "least") {
    res = res.sort((a, b) => a.salary - b.salary);
  } else if (sortOrder === "high") {
    res = res.sort((a, b) => b.salary - a.salary);
  }
  return res;
};
