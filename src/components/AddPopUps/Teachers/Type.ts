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

export const classSubjects = [
  {
    classname: "class_12",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Maths",
      "Computer Science",
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
    ],
  },
  {
    classname: "class_11",
    subjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "Maths",
      "Computer Science",
      "Accountancy",
      "Business Studies",
      "Economics",
      "English",
    ],
  },
  {
    classname: "class_10",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer Science",
      "English",
      "General Knowledge",
    ],
  },
  {
    classname: "class_9",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer Science",
      "English",
      "General Knowledge",
    ],
  },
  {
    classname: "class_8",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer",
      "English",
      "General Knowledge",
      "Physical Education",
    ],
  },
  {
    classname: "class_7",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer",
      "English",
      "General Knowledge",
      "Physical Education",
    ],
  },
  {
    classname: "class_6",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer",
      "English",
      "General Knowledge",
      "Physical Education",
    ],
  },
  {
    classname: "class_5",
    subjects: [
      "Science",
      "Hindi",
      "Social Studies",
      "Maths",
      "Computer",
      "English",
      "General Knowledge",
      "Physical Education",
    ],
  },
  {
    classname: "class_4",
    subjects: [
      "Hindi",
      "Maths",
      "English",
      "General Knowledge",
      "Physical Education",
    ],
  },
];
