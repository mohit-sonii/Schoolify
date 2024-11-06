import { StudentTable } from "./TableType";

export const FilterSort = (
  students: StudentTable[],
  optionFees?: string,
  optionAdmission?: number | undefined,
  optionClass?: string,
  sortingAdmissionValue?: string,
  sortingFeesValue?: string
) => {
  const res = students.filter((val) => {
    const isClassMatch = optionClass ? val.Class === optionClass : true;
    const isAdmissionMatch = optionAdmission
      ? val["Admission Year"] === optionAdmission
      : true;
    const isFeesMatch = optionFees
      ? val["Last Fees Paid"] === optionFees : true;

    return isClassMatch && isAdmissionMatch && isFeesMatch
  });
  if (sortingAdmissionValue === "oldest") {
    res.sort((a, b) => a["Admission Year"] - b["Admission Year"]);
  } else if (sortingAdmissionValue === "newest") {
    res.sort((a, b) => b["Admission Year"] - a["Admission Year"]);
  }

  if (sortingFeesValue === "highest")
    res.sort((a, b) => b["Outstanding Fees"] - a["Outstanding Fees"])
  else if (sortingFeesValue === "lowest")
    res.sort((a, b) => a["Outstanding Fees"] - b["Outstanding Fees"])

  return res
};
// If optionClass is not set (e.g., it’s an empty string or null), isClassMatch is assigned true, which means this criterion is considered a "match" for all students. So, effectively, it ignores the Class field in filtering if optionClass is empty or undefined.