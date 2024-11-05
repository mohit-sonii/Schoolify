import { Month, Gender } from "@prisma/client"

export type StudentTable = {
  StudentId: number,
  Username: string,
  "First Name": string,
  "Last Name": string,
  "Mother Name"?: string,
  "Father Name"?: string,
  Gender?: Gender,
  "Contact No"?: string,
  Address?: string,
  "Fees Paid Upto"?: Month,
  "Admission Year"?: number,
  "Passing out Year"?: number | null,
  Class: string,
  "Outstanding Fees":number
}

