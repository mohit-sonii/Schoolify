
export type Teacher = {
  "Joinne Id": number;
  "Full Name": string;
  Qualifications: string;
  "Date of Arrival": string;
  "Last Serve": string | undefined;
  "Serving in Present": "Yes" | "No";
  "Contact Number": string;
  Address: string;
  "Last Paid": string;
  Salary: number;
  Gender: string;
  subjectAndClasses: {
    [key:string]:string[]
  }[]
};
