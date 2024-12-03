"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { classes } from "@/components/Extra";
import { useEffect } from "react";
import useModalStore from "@/utils/store";
import InputField, { SelectField } from "@/components/InputField";
import { ActionReturnType } from "../ReturnType";
import { AddSubjectAction } from "./Actions";
import { addSubjectSchema } from "./zodValidation";

const SubjectForm = () => {
  const { closeModal } = useModalStore();
  const renderValue = useModalStore((state)=>state.changeStudentRender)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof addSubjectSchema>>({
    resolver: zodResolver(addSubjectSchema),
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

  const handleSubjectAddition = handleSubmit(async (data: any) => {
    const toastLoading = toast.loading("Please Wait...");
    try {
      const result: ActionReturnType = await AddSubjectAction(data);
      if (result.success) {
        reset();
        toast.success(result.message);
        renderValue()
      } else {
        toast.error(result.message)
      }
      toast.dismiss(toastLoading)
    } catch (err: any) {
      console.log(err);
      if (err.message) {
        toast.error(err.message);
      }
    }
  });

  return (
    <div className="absolute  items-center justify-center z-50  bg-gray-200 h-max flex flex-col flex-wrap w-full gap-8 p-4 rounded-md shadow-md">
      <div className="w-full justify-between items-center flex">
        <h1 className=" text-lg font-bold ">Add a new Subject</h1>
        <button
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white  transition-all ease-in-out hover:text-black hover:font-bold flex gap-2 flex-row w-max"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <form
        onSubmit={handleSubjectAddition}
        className="flex gap-4 flex-wrap w-full  "
      >
        <InputField
          label="Subject Name"
          type="text"
          register={register}
          defaultValue=""
          name="subjectName"
        />

        <SelectField
          label="Date"
          values={classes}
          name="classname"
          register={register}
        />
        <div className="flex w-full items-center justify-end">
          <button
            type="submit"
            className="px-8 py-2 border-none h-max shadow-lg outline-none text-xs font-medium text-gray-200 rounded-lg bg-green-600  transition-all ease-in-out hover:text-white hover:font-bold flex gap-2 flex-row w-max"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubjectForm;

