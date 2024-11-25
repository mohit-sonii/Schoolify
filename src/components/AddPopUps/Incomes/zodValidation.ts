import { z } from "zod";

export const addIncomeSchema = z.object({
  month: z.string(),
  date: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num) && num >= 1 && num < 32, {
      message: "Date should be in between 1 and 31",
    }),
  amount: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num), {
      message: "Amount must be atleast 10",
    }),
  year: z
    .string()
    .transform((str) => parseInt(str, 10))
    .refine((num) => Number.isInteger(num), {
      message: "Please select correct year",
    }),
  description: z
    .string()
    .max(500, "Description should not be grater than 500 charcters")
    .min(20, { message: "Description should be atleast 20 characters long" }),
  title: z
    .string()
    .min(5, { message: "Title must be atleast of 5 Characters" })
    .max(50, { message: "Title must not be greater than 50 characters" }),
});
