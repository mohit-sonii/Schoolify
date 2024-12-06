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


export type ClassData = {
  id: $Enums.ClassList;
  group: $Enums.Group;
  subjects: {
    subjectName: string;
  }[];
  teacher: {
    firstname: string;
    lastname: string;
  }[];
  fees:{
    amount: number
  }[];
} 