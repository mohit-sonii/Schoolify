import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { years,months } from '@/components/Extra'
import { useEffect } from 'react'
import { addIncomeSchema } from './zodValidation'
import useModalStore from '@/utils/store'
import InputField, { SelectField } from '@/components/InputField'
import { ActionReturnType } from '../ReturnType'
import { AddIncomeAction } from './Actions'

const IncomeForm = () => {

  const {closeModal}  = useModalStore()
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof addIncomeSchema>>({
    resolver:zodResolver(addIncomeSchema)
  })

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      for (const field in errors) {
        const err = errors[field as keyof typeof errors]
        if (err?.message) {
            toast.error(`${field.toUpperCase()} : ${err.message}`)
        }
      }
    }
  },[errors])

  const handleIncomeAddition = handleSubmit(async (data: any) => {
    const toastLoading = toast.loading("Please Wait...")
    try {
      const result: ActionReturnType = await AddIncomeAction({
        month: data.month,
        date: parseInt(data.date, 10),
        amount: parseInt(data.amount, 10),
        year: parseInt(data.year, 10),
        description: data.description,
        title:data.title
      })
      if (result.success) {
        toast.dismiss(toastLoading)
        toast.success(result.message)
      }
    } catch (err: any) {
      console.log(err)
      if (err.message) {
        toast.error(err.message)
      }
    }
  })


  return (
    <div className="absolute  items-center justify-center z-50  bg-gray-200 h-max flex flex-col flex-wrap w-full gap-8 p-4 rounded-md shadow-md">
      <div className="w-full justify-between items-center flex">
        <h1 className=" text-lg font-bold ">Add a new Income</h1>
        <button
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white  transition-all ease-in-out hover:text-black hover:font-bold flex gap-2 flex-row w-max"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <form
        onSubmit={handleIncomeAddition}
        className="flex gap-4 flex-wrap w-full "
      >
        <InputField
          label="Title"
          type="text"
          classnames="w-[80%]"
          register={register}
          defaultValue=""
          name="title"
        />
        <SelectField
          values={years}
          label="Year"
          name="year"
          register={register}
        />
        <SelectField
          values={months}
          label="Month"
          name="month"
          register={register}
        />
        <InputField
          label="Date"
          type="number"
          classnames="w-[150px]"
          defaultValue={0}
          name="date"
          register={register}
        />
        <InputField
          label="Amount"
          type="number"
          classnames="font-bold"
          defaultValue={0}
          register={register}
          name="amount"
        />
        <InputField
          name="description"
          label="Description"
          defaultValue=""
          type="text"
          register={register}
          classnames="w-[80%] h-auto"
        />
        <button
          type="submit"
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-200 rounded-lg bg-green-600  transition-all ease-in-out hover:text-white hover:font-bold flex gap-2 flex-row w-max"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default IncomeForm