import { z } from 'zod'

export const student = z.object({
  username: z.string().min(3, { message: 'Username must be 3 characters long' }),
  firstname: z.string(),
  lastname: z.string(),
  birthday: z.date(),
  gender: z.enum(['Male', 'Female']),
  contact: z.string().min(10, { message: 'Please Enter correct contact number' }),
  classId: z.coerce.number().min(1, { message: 'Class is Required' }),
})
export type StudentSchema = z.infer<typeof student>

export const teacher = z.object({
  firstname: z.string(),
  lastname: z.string(),
  gender: z.enum(['Male', 'Female']),
  username: z.string().min(3, { message: 'Username must be 3 characters long' }),
  contact: z.string().min(10, { message: 'Please enter correct contact number' }),
  address: z.string()
})
export type TeacherSchema = z.infer<typeof teacher>

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string()
})
export type ClassSchema = z.infer<typeof classSchema>

export const exam = z.object({
  title: z.string().min(2, { message: 'Please enter correct exam title' }),
  lessonId: z.coerce.number()
})
export type ExamSchema = z.infer<typeof exam>


