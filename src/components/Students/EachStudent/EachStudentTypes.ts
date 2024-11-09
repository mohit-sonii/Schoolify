export type EachStudent = {
  studentId: number;
  username: string;
  firstname: string;
  lastname: string;
  contactNo: string;
  admissionYear: number;
  classId: string;
  motherName: string;
  fatherName: string;
  gender: "Male" | "Female";
  address: string;
  feesPaidUpto: string;
  passedOutYear: number | null;
  class: Class;
  attendance: Attendance;
  result: Result[];
};
type Class = {
  id:
    | "class_4"
    | "class_5"
    | "class_6"
    | "class_7"
    | "class_8"
    | "class_9"
    | "class_10"
    | "class_11"
    | "class_12";
  group: "Rose" | "Marigold" | "Lily" | "Sunflower";
  teacher: Teacher[];
  exam: Exam;
  subjects: Subject;
  fees: Fees;
};

type Teacher = {
  firstname: string;
  lastname: string;
};

type Subject = {
  subjectName: string;
  teacherUsername: string;
};

type Exam = {
  classId: string;
  subjectId: number;
};

type Result = {
  score: number;
  examId: number;
  stuId: number;
};

type Fees = {
  amount: number;
};

type Attendance = {
  present: boolean;
  date: Date;
};
