import { StudentTable } from "./TableType";

export const FilterWorking = (
  students: StudentTable[],
  optionFees?: string,
  optionAdmission?: number|undefined,
  optionClass?: string
) => {
  const res =  students.filter((val) => {
    // If optionClass is not set (e.g., it’s an empty string or null), isClassMatch is assigned true, which means this criterion is considered a "match" for all students. So, effectively, it ignores the Class field in filtering if optionClass is empty or undefined.
    const isClassMatch = optionClass ? val.Class === optionClass : true
    const isAdmissionMatch = optionAdmission ? val["Admission Year"] === optionAdmission : true
    const isFeesMatch = optionFees ? val["Last Fees Paid"] === optionFees : true
    return isClassMatch && isAdmissionMatch && isFeesMatch
  })
  return res
};
