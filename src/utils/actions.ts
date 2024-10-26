import prisma from "./db"
import { ClassSchema } from "./formSchemaValidation"

type CurrentState = {
  success: boolean,
  error: boolean
}
export const createClass = async (currentState: CurrentState, data: ClassSchema) => {
  try {
    await prisma.class.create({
      data
    })
    return { success: true, error: false }

  } catch (error) {
    console.log(error)
    return { success: false, error: true }
  }
}

export const updateClass = async (currentState: CurrentState, data: ClassSchema) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data
    })
    return { success: true, error: false }
  } catch (error: any) {
    console.log(error)
    return { success: false, erorr: true }
  }
}