"use client";
import React from "react";
import { dataType } from "./Type";
import { useRouter } from "next/navigation";
import Divider from "@mui/material/Divider";
import ClassSubjects from "./ClassSubjects";

const ClassData = ({ data }: { data: dataType[] }) => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col gap-6 mb-6">
      {data.map((val) => (
        <div
          key={val.classname}
          className="w-full h-max flex flex-wrap items-center gap-3"
        >
          <div className=" w-full sm:w-[10%] flex flex-col gap-3">
            <span className="font-semibold text-gray-700 text-xs ">
              {val.classname}
            </span>
          </div>
          <div className="flex w-full flex-col sm:w-[85%] gap-3">
            <div className="flex flex-wrap items-center gap-3 flex-row">
              <h3 className="text-gray-700 font-semibold text-xs">
                Teachers :
              </h3>
              {val.teacher.map((val, index) => (
                <span
                  key={index}
                  className=" odd:bg-amber-200 hover:font-semibold transition-all ease-out even:bg-orange-200 font-normal cursor-pointer  rounded-md px-4 py-2 text-xs flex items-center justify-center w-max"
                  onClick={() => router.replace(`/teachers/${val.username}`)}
                >
                  {val.fullName}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 items-center flex-row">
              <h3 className="text-gray-700 font-semibold text-xs">
                Subjects :
              </h3>
              <ClassSubjects classname={val.classname} />
            </div>
          </div>
          <Divider key={val.classname} />
        </div>
      ))}
    </div>
  );
};

export default ClassData;
