import { z } from "zod";

export const addStudentSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be atleast 3 Characters" })
    .max(10, { message: "Username shall not be more than 10 Characters" }),
  firstname: z.string(),
  lastname: z.string(),
  mothername: z.string(),
  fathername: z.string(),
  gender: z.string(),
  contact: z
    .string()
    .length(10, { message: "Contact Number should be atleast 10 Digits" }),
  dob: z.string(),
  address: z
    .string()
    .max(100, { message: "Address must be more than 100 Characters" }),
  feesPaidUpto: z.string(),
  passedOutYear: z.string().optional(),
  admission: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num), {
      message: "Please Enter Correct Admission Year",
    }),
  classname: z.string(),
});
