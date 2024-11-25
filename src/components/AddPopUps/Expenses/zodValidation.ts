import { z } from "zod";

export const addExpenseSchema = z.object({
  month: z.string(),
  year: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num > 2000, {
      message: "Please Enter Correct Year",
    }),
  amount: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num > 10, {
      message: "Amount must be atleast 10",
    }),
  date: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num >= 1 && num < 32, {
      message: "Date should be in between 1 and 31",
    }),
  description: z
    .string()
    .min(20,{message:"Description should atleast 20 characters long"})
    .max(500, { message: "Description should not be greater than 500" }),
  title: z
    .string()
    .min(5, { message: "Title should be 5 letters long" })
    .max(50, { message: "Title should not greater than 50 in length" }),
});
