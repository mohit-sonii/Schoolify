"use client";

import useModalStore from "@/utils/store";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DeleteAction } from "@/utils/DeleteAction";

const RemoveTeacherForm = ({ username }: { username: string }) => {
  const router = useRouter()
  const { closeModal } = useModalStore();
  const handleDelete = async () => {
    const setLoading = toast.loading("Please Wait..");
    try {
      const result = await DeleteAction(username,"teacher");
      if (result.success) {
        toast.success(result.message);
        closeModal()
        router.replace("/dashboard/teachers")
      } else {
        toast.error(result.message);
      }
      toast.dismiss(setLoading);
    } catch (err: any) {
      if (err.message) {
        toast.error(err.message);
      }
    }
  };
  return (
    <div className="absolute  top-0 flex items-center justify-center bg-gray-200 flex-wrap gap-15 p-4 rounded-md shadow-md z-50 flex-col w-full h-auto ">
      <div className="w-full flex flex-col gap-3">
        <h1 className="font-bold text-lg">Are you sure ?</h1>
        <span className="font-normal text-xs ">
          Removing a teacher is permanent
        </span>
      </div>
      <div className="w-full items-center flex gap-3 flex-wrap justify-end">
        <button
          onClick={closeModal}
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white  transition-all ease-in-out hover:text-black hover:font-bold flex gap-2 flex-row w-max"
        >
          Close
        </button>
        <button
          onClick={handleDelete}
          className="px-8 py-2 border-none shadow-lg outline-none text-xs font-medium text-white rounded-lg bg-red-600  transition-all ease-in-out  hover:font-bold flex gap-2 flex-row w-max"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RemoveTeacherForm;
