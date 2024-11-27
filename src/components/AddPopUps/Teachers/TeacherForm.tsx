"use client";

import InputField, {
  SelectField,
  SelectWithCheckBox,
} from "@/components/InputField";
import { useEffect } from "react";
import useModalStore from "@/utils/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addTeacherSchema } from "./zodValidation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { months, years } from "@/components/Extra";
import { AddTeacherAction } from "./Actions";
import { ActionReturnType } from "../ReturnType";

const obj = [
  { value: "class_12", label: "12th" },
  { value: "class_11", label: "11th" },
  { value: "class_10", label: "10th" },
  { value: "class_9", label: "9th" },
  { value: "class_8", label: "8th" },
  { value: "class_7", label: "7th" },
  { value: "class_6", label: "6th" },
  { value: "class_5", label: "5th" },
  { value: "class_4", label: "4th" },
];
export type teacher = {
  classes: string[];
  contact: string;
  firstname: string;
  lastname: string;
  gender: string;
  joiningDate: string;
  joiningMonth: string;
  joiningYear: string;
  qualification: string;
  username: string;
  servedTill: string;
  address: string;
  salary: string;
  lastSalaryPaid: string;
};
const TeacherForm = () => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof addTeacherSchema>>({
    resolver: zodResolver(addTeacherSchema),
  });

  const { closeModal } = useModalStore();

  const handleTeacherAddition = handleSubmit(async (data: any) => {
    const toastLoading = toast.loading("Please Wait...");
    try {
      const result:ActionReturnType = await AddTeacherAction(data);
      if (result.success) {
        reset();
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
      toast.dismiss(toastLoading);
    } catch (err: any) {
      console.log(err);
      if (err.message) toast.error(err.message);
      toast.dismiss(toastLoading);
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
    <div className="absolute flex items-center justify-center bg-gray-200 h-max flex-wrap gap-8 p-4 rounded-md shadow-md z-50 flex-col ">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-lg">Add new Teacher</h1>
        <button
          onClick={closeModal}
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white  transition-all ease-in-out hover:text-black hover:font-bold flex gap-2 flex-row w-max"
        >
          Close
        </button>
      </div>
      <form
        className="flex w-full gap-4 flex-wrap"
        onSubmit={handleTeacherAddition}
      >
        <InputField
          defaultValue=""
          register={register}
          label="Username"
          name="username"
          type="text"
        />
        <InputField
          defaultValue=""
          register={register}
          label="First Name"
          name="firstname"
          type="text"
        />
        <InputField
          defaultValue=""
          register={register}
          label="Last Name"
          name="lastname"
          type="text"
        />
        <InputField
          defaultValue=""
          register={register}
          label={"Highest Qualification"}
          name="qualification"
          type="text"
        />
        <InputField
          defaultValue={1}
          register={register}
          label={"Joining Date"}
          name="joiningDate"
          type="number"
        />
        <InputField
          defaultValue=""
          register={register}
          label={"Contact No"}
          name="contact"
          type="string"
        />
        <InputField
          defaultValue={10000}
          register={register}
          label={"Salary"}
          name="salary"
          type="number"
        />
        <SelectField
          values={months}
          label="Joining Month"
          name="joiningMonth"
          register={register}
        />
        <SelectField
          values={years}
          label="Joining Year"
          name="joiningYear"
          register={register}
        />
        <SelectField label="Gender" name="gender" register={register} />
        <InputField
          defaultValue=""
          register={register}
          label={"Served Till *"}
          name="servedTill"
          type="string"
        />
        <SelectField
          values={months}
          label="Last Salary Paid"
          name="lastSalaryPaid"
          register={register}
        />

        <SelectWithCheckBox
          control={control}
          name="classes"
          label="Assign Classes"
          options={obj}
        />
        <InputField
          defaultValue=""
          register={register}
          label={"Address"}
          name="address"
          type="string"
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
export default TeacherForm;
