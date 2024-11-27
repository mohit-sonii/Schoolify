"use server";

import prisma from "@/utils/db";
import { ActionReturnType } from "../ReturnType";
import { teacher } from "./TeacherForm";
import { $Enums } from "@prisma/client";

export const AddTeacherAction = async (
  data: teacher
): Promise<ActionReturnType> => {
  try {
    console.log(data)
    const result = await prisma.teacher.create({
      data: {
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        qualification: data.qualification,
        joiningDate: parseInt(data.joiningDate, 10),
        joiningMonth: data.joiningMonth as $Enums.Month,
        joiningYear: parseInt(data.joiningYear, 10),
        gender: data.gender as $Enums.Gender,
        lastSalaryPaid: data.lastSalaryPaid as $Enums.Month,
        address: data.address,
        salary: parseInt(data.salary,10),
        contactNo:data.contact,
        classes: {
          connect:data.classes.map((val)=>({id:val as $Enums.ClassList}))
        },
      },
    });
    console.log(result)
    if(result){
      return {
        success:true,
        message:"Teacher Added Successfully !!!"
      }
    }
  } catch (err: any) {
    console.log(err);
    return {
      success: false,
      message: err?.message,
    };
  }
  return {
    success: false,
    message: "Something went wrong !!!",
  };
};
