import { z } from "zod";

export const addTeacherSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be atleast 3 Characters" })
    .max(10, { message: "Username shall not be more than 10 Characters" }),
  firstname: z
    .string()
    .min(2, { message: "Firstname should be atleast 2 Characters" }),
  lastname: z
    .string()
    .min(2, { message: "Lastname should be atleast 2 Characters" }),
  qualification: z
    .string()
    .min(2, { message: "Qualification should be atleast 2 Characters" }),
  joiningDate: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num >= 1 && num < 32, {
      message: "Date should be in between 1 and 31",
    }),
  joiningMonth: z.string(),
  joiningYear: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num >= 2000, {
      message: "Year should be in 2000 onwards",
    }),
  gender: z.string(),
  servedTill: z.string().optional(),
  servedPresent: z.boolean().optional(),
  lastSalaryPaid: z.string().min(2, { message: "Please Select Correct Month" }),
  contact: z
    .string()
    .length(10, { message: "Contact Number should be atleast 10 Digits" }),
  address: z
    .string()
    .min(10, { message: "Please Enter Complete Address" })
    .max(100, { message: "Address must be more than 100 Characters" }),
  salary: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num), {
      message: "Please Enter correct salary",
    }),
  classes: z
    .array(z.string())
    .min(1, "Atleast assign one class to a teacher")
    .max(3, "A Teacher cannot have more than 3 Classes"),
});
