import { Month, Gender } from "@prisma/client"

export type StudentTableSchema = {
  StudentId: number,
  Username: string,
  "First Name": string,
  "Last Name": string,
  "Mother Name"?: string,
  "Father Name"?: string,
  Gender?: Gender,
  "Contact No"?: string,
  Address?: string,
  "Last Fees Paid"?: Month,
  "Admission Year": number,
  "Passing out Year"?: number | null,
  Class: string,
  "Outstanding Fees": number
}

export const classNames = ["4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]

export const admissionYears = new Array(new Date().getFullYear() - 2020 + 1).fill(2020).map((_, index) => 2020 + index)



