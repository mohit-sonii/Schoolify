export type teacher = {
  classes: string[];
  contact: string;
  firstname: string;
  lastname: string;
  gender: string;
  joiningDate: string;
  joiningMonth: string;
  joiningYear: string;
  qualification: string;
  username: string;
  servedTill: string;
  address: string;
  salary: string;
  lastSalaryPaid: string;
  subjects:any
};

export const classesForSelect = [
  { value: "class_12", label: "12th" },
  { value: "class_11", label: "11th" },
  { value: "class_10", label: "10th" },
  { value: "class_9", label: "9th" },
  { value: "class_8", label: "8th" },
  { value: "class_7", label: "7th" },
  { value: "class_6", label: "6th" },
  { value: "class_5", label: "5th" },
  { value: "class_4", label: "4th" },
];

