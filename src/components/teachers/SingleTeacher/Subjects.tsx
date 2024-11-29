"use server"
import React from "react";
const Subjects = ({
  // subject,
  classes,
}: {
  // subject: string[];
  classes: string[];
}) => {
  return (
    <div className="w-full h-max bg-orange-200 flex text-xs flex-row items-center justify-between rounded-lg p-4 gap-3 ">
      {/* <div className="w-[45%]  h-max flex flex-col gap-5">
        <h1 className="text-sm font-semibold text-gray-900 ">
          Subjects
        </h1>
        <div className="flex flex-col gap-2 text-xs font-light  w-full ">
          {subject.map((val,index) => (
            <span key={index} className="text-gray-700 text-xs font-semibold flex-wrap">
              {val}
            </span>
          ))}
        </div>
      </div> */}
      <div className="w-[45%] flex flex-col gap-5">
        <h1 className="text-sm font-semibold text-gray-900 ">
          Classes
        </h1>
        <div className="flex flex-col gap-2 text-xs font-light  w-full ">
          {classes.map((val,index) => (
            <span key={index} className="text-gray-700 text-xs font-semibold">{val}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
