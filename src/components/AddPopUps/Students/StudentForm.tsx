"use client";
import React, { useEffect } from "react";
import InputField, { SelectField } from "../../InputField";
import { classes, months, years } from "../../Extra";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useModalStore from "@/utils/store";
import { AddStudentAction } from "./Actions";
import toast from "react-hot-toast";
import { addStudentSchema } from "./zodValidation";
import { z } from "zod";
import { ActionReturnType } from "../ReturnType";

const StudentForm = () => {
  const { closeModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof addStudentSchema>>({
    resolver: zodResolver(addStudentSchema),
  });

  const handleStudentAddition = handleSubmit(async (data: any) => {
    const toastLoading = toast.loading("Please Wait...");
    try {
      const result: ActionReturnType =
        await AddStudentAction(data);
      if (result.success) {
        toast.dismiss(toastLoading);
        toast.success(result.message);
      }
    } catch (error: any) {
      console.log(error);
      if (error.message) {
        toast.error(error.message);
      }
    }
  });
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      for (const field in errors) {
        const err = errors[field as keyof typeof errors];
        if (err?.message) {
          toast.error(`${field.toUpperCase()} : ${err.message}`);
        }
      }
    }
  }, [errors]);

  return (
    <div className="absolute  items-center justify-center z-50  bg-gray-200 h-max flex flex-col flex-wrap w-full gap-8 p-4 rounded-md shadow-md">
      <div className="w-full justify-between items-center flex">
        <h1 className=" text-lg font-bold ">Add a new Student</h1>
        <button
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white  transition-all ease-in-out hover:text-black hover:font-bold flex gap-2 flex-row w-max"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <form
        onSubmit={handleStudentAddition}
        className="flex gap-4 flex-wrap w-full "
      >
        <InputField
          label="Username"
          type="text"
          register={register}
          defaultValue=""
          name="username"
        />
        <InputField
          label="First Name"
          type="text"
          register={register}
          defaultValue=""
          name="firstname"
        />
        <InputField
          label="Last Name"
          type="text"
          register={register}
          defaultValue=""
          name="lastname"
        />
        <InputField
          label="Mother Name"
          type="text"
          register={register}
          defaultValue=""
          name="mothername"
        />
        <InputField
          label="Father Name"
          type="text"
          register={register}
          defaultValue=""
          name="fathername"
        />
        <SelectField
          label="Gender"
          name="gender"
          register={register}
        />
        <InputField
          label="Contact Number"
          type="text"
          classnames=""
          register={register}
          defaultValue=""
          name="contact"
        />
        <SelectField
          values={years}
          label="Addmission Year"
          name="admission"
          register={register}
        />
        <SelectField
          values={months}
          label="Fees Paid Upto"
          name="feesPaidUpto"
          register={register}
        />
        <SelectField
          values={classes}
          label="Class"
          name="classname"
          register={register}
        />
        <InputField
          label="Date of Birth"
          type="string"
          classnames="w-[150px]"
          defaultValue={0}
          name="dob"
          register={register}
        />
        <InputField
          name="address"
          label="Address"
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
  );
};

export default StudentForm;
