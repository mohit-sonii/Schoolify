"use server";

import prisma from "@/utils/db";
import { ActionReturnType } from "../ReturnType";
import { $Enums } from "@prisma/client";
import { teacher } from "./Type";

export const AddTeacherAction = async (
  data: teacher,
): Promise<ActionReturnType> => {
  try {
    const alreadyPresent = await prisma.teacher.findFirst({
      where: {
        username: data.username,
      },
    });
    if (alreadyPresent != null)
      return {
        success: false,
        message: "User with this username already exists !!",
      };

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
        salary: parseInt(data.salary, 10),
        contactNo: data.contact,
        classes: {
          connect: data.classes.map((val) => ({ id: val as $Enums.ClassList })),
        },
        subjects: data.subjects
      },
    });
    if (result) {
      return {
        success: true,
        message: "Teacher Added Successfully !!!",
      };
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
