import { $Enums } from "@prisma/client";

export type Student = {
  studentId: number;
  username: string;
  firstname: string;
  lastname: string;
  contactNo: string;
  classId: string;
  motherName: string;
  fatherName: string;
  gender: 'Male' | 'Female';
  address: string;
  feesPaidUpto: string;
};

export type Result = {
  score: number | null;
  examId: number | null;
}[] | undefined


export type ClassData = {
  id: $Enums.ClassList;
  group: $Enums.Group;
  subjects: {
    subjectName: string;
    teacherUsername: string;
  }[];
  teacher: {
    firstname: string;
    lastname: string;
  }[];
  exams: {
    monthname: $Enums.MonthsOfExam;
    subjectId: number | null;
    results: {
      score: number | null;
    }[];
  }[];
  fees: {
    amount: number
  }[];
} 