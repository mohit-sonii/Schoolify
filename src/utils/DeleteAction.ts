"use server";

import { ActionReturnType } from "@/components/AddPopUps/ReturnType";
import prisma from "@/utils/db";

export const DeleteAction = async (
  username: string,
  model:string
): Promise<ActionReturnType> => {
  try {
    if (model === "teacher") {
      await prisma.teacher.delete({
        where: {
          username: username,
        },
      });
      return {
        success: true,
        message: "Data Deleted Successfully",
      };
    }
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
