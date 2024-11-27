"use server";
import prisma from "@/utils/db";
import { ActionReturnType } from "../ReturnType";
import { StudentType } from "./Type";
import { $Enums } from "@prisma/client";

export const AddStudentAction = async (
  data: StudentType
): Promise<ActionReturnType> => {
  try {
    const alreadyPresent = await prisma.student.findFirst({
      where: {
        username:data.username
      }
    })
    if (alreadyPresent != null) {
      return {
        success: false,
        message:"User with this username already exists !!"
      }
    }
    const result = await prisma.student.create({
      data: {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        motherName: data.mothername,
        fatherName: data.fathername,
        gender: data.gender as $Enums.Gender,
        contactNo: data.contact,
        dob: data.dob,
        address: data.address,
        feesPaidUpto: data.feesPaidUpto as $Enums.Month,
        admissionYear: data.admission,
        classId: data.classname as $Enums.ClassList,
      },
    });
    if (result) {
      return {
        success: true,
        message: "Student Added Successfully !!!",
      };
    }
  } catch (err: any) {
    console.log(err);
    if (err.message) {
      return {
        success: false,
        message: err.message,
      };
    }
  }
  return {
    success: false,
    message: "Something Went Wrong !!",
  };
};
