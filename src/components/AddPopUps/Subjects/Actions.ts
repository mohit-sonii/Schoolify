"use server";

import prisma from "@/utils/db";
import { ActionReturnType } from "../ReturnType";
import { $Enums } from "@prisma/client";

export const AddSubjectAction = async (data: {
  subjectName: string;
  classname: string;
}): Promise<ActionReturnType> => {
  try {
    const check = await prisma.subject.findFirst({
      where: {
        AND: [
          {
            subjectName: data.subjectName
              .charAt(0)
              .toUpperCase()
              .concat(data.subjectName.substring(1)),
            classname: data.classname as $Enums.ClassList,
          },
        ],
      },
    });
    if (check != null)
      return {
        success: false,
        message: "Subject already exists "
      };
    await prisma.subject.create({
      data: {
        subjectName: data.subjectName
          .charAt(0)
          .toUpperCase()
          .concat(data.subjectName.substring(1)),
        classname: data.classname as $Enums.ClassList,
      },
    });
    return {
      success: true,
      message: "Subject Added Successfully",
    };
  } catch (err: any) {
    console.log(err);
    if (err?.message) {
      return {
        success: false,
        message: err.message,
      };
    } else
      return {
        success: false,
        message: "Something went wrong !!!",
      };
  }
};
