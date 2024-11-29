"use server";

import prisma from "@/utils/db";
import { ActionReturnType } from "../../ReturnType";

export const DeleteTeacher = async (
  username: string
): Promise<ActionReturnType> => {
  try {
    await prisma.teacher.delete({
      where: {
        username: username,
      },
    });
    return {
      success: true,
      message: "Data Deleted Successfully",
    };
  } catch (err: any) {
    if (err.message) {
      return {
        success: false,
        message: err.message,
      };
    }
  }
  return {
    success: false,
    message: "Something went wrong !!!",
  };
};
