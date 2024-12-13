"use server";
import React from "react";
const Subjects = ({
  subjectAndClasses,
}: {
  subjectAndClasses: {
    [key: string]: string[];
  }[];
}) => {
  return (
    <div className="w-full h-max bg-orange-200 flex text-xs flex-row items-center justify-between rounded-lg p-4 gap-3 ">
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-sm font-semibold text-gray-900 ">Classes And Subjects</h1>
        <div className="flex flex-col gap-2 text-xs font-light  w-full ">
          {subjectAndClasses.map((val) => {
            const key = Object.keys(val)[0];
            const values = val[key];
            return (
              <div className="w-full flex flex-col gap-3">
                <p className="w-max text-xs font-bold px-4 py-2 flex items-center justify-center bg-white rounded-md">
                  {key.replace("class_", "Class ")}
                </p>
                <div className="w-full xl:w-[80%] m-auto flex ">
                  {values.map((str) => (
                    <p className="w-max font-normal bg-gray-400 rounded-md px-4 py-2 text-xs">{str}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
