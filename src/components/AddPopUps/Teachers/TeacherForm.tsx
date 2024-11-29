"use client";

import InputField, {
  SelectField,
  SelectWithCheckBox,
} from "@/components/InputField";
import { useEffect, useState } from "react";
import useModalStore from "@/utils/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addTeacherSchema } from "./zodValidation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { months, years } from "@/components/Extra";
import { AddTeacherAction, getSubjectsAccToClass } from "./Actions";
import { ActionReturnType } from "../ReturnType";
import { classesForSelect } from "./Type";

const TeacherForm = () => {
  const {
    formState: { errors },
    register,
    reset,
    watch,
    handleSubmit,
    control,
  } = useForm<z.infer<typeof addTeacherSchema>>({
    resolver: zodResolver(addTeacherSchema),
  });

  const [selectedSubjects, setSelectedSubjects] = useState<
    {
      classname: string;
      subjects: string[];
    }[]
    >([]);
  
  const [subjects, setSubjects] = useState<
    { classname: string; subjects: string[] }[] | null
  >(null);

  const { closeModal } = useModalStore();

  const handleTeacherAddition = handleSubmit(async (data: any) => {
    const toastLoading = toast.loading("Please Wait...");
    try {
      const result: ActionReturnType = await AddTeacherAction({
        ...data,
        subjects: selectedSubjects,
      });
      if (result.success) {
        reset();
        setSubjects(null);
        setSelectedSubjects([])
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

  const selectedClasses = watch("classes");

  const showSubjects = async () => {
    const setLoading = toast.loading("Please Wait...");
    if (selectedClasses.length > 3) {
      toast.error("A Teacher cannot have more than 3 Classes");
      return;
    }
    const classSubjects: { classname: string; subjects: string[] }[] =
      await getSubjectsAccToClass(selectedClasses);
    toast.dismiss(setLoading);
    setSubjects(classSubjects);
  };


  const handleCheckboxChange = (classname: string, subject: string) => {
    setSelectedSubjects((prev) => {
      const updatedSubjects = [...prev]
      const index = selectedSubjects.findIndex((item) => item.classname === classname)
      if (index !== -1) {
        const obj = updatedSubjects[index];
        const updatedArray = obj.subjects.includes(subject) ? obj.subjects.filter((val) => val !== subject) : [...obj.subjects, subject]
        updatedSubjects[index] = { ...obj, subjects: updatedArray };
      } else {
        updatedSubjects.push({ classname, subjects: [subject] })
      }
      return updatedSubjects
    })
  };

  return (
    <div className="absolute  top-0 flex items-center justify-center bg-gray-200 flex-wrap gap-8 p-4 rounded-md shadow-md z-50 flex-col w-full h-auto">
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
        <div className="flex gap-5 flex-wrap w-full items-end">
          <SelectWithCheckBox
            control={control}
            name="classes"
            label="Assign Classes"
            options={classesForSelect}
          />
          <button
            type="button"
            className="px-8 py-2 border-none h-max shadow-lg outline-none text-xs font-medium text-gray-200 rounded-lg bg-blue-500  transition-all ease-in-out hover:text-white hover:font-semibold flex gap-2 flex-rerow w-max"
            onClick={showSubjects}
          >
            Find Subjects
          </button>
        </div>
        {subjects &&
          subjects.map((obj) => (
            <div className="w-full flex flex-col gap-3" key={obj.classname}>
              <label
                htmlFor={obj.classname}
                className="text-xs font-medium text-gray-600"
              >
                {obj.classname.replace("class_", "").concat("th")}
              </label>
              <div className="w-full flex flex-wrap gap-3">
                {obj.subjects.map((subject) => (
                  <label
                    key={subject}
                    className="text-xs font-medium text-gray-600 flex gap-3 items-center flex-wrap"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.some((val) => val.classname === obj.classname && val.subjects.includes(subject))}
                      onChange={() =>
                        handleCheckboxChange(obj.classname, subject)
                      }
                    />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
          ))}

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
