

import { z } from 'zod'

export const addSubjectSchema = z.object({
  subjectName: z.string(),
  classname:z.string()
})