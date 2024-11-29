"use client";

import React, { useEffect, useState } from "react";
import { FetchClassSubjectAccToProp } from "../Subjects/FetchClassSubjects";

const ClassSubjects =  ({ classname }: { classname: string }) => {
  const [subjects, setSubjects] = useState<string[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const res: string[] = await FetchClassSubjectAccToProp(classname);
      setSubjects(res);
    };
    fetch();
  }, [classname]);
  return (
    <div className="flex gap-3 flex-wrap">
      {subjects &&
        subjects.map((val, index) => (
          <span
            key={index}
            className=" odd:bg-lime-200 hover:font-semibold transition-all ease-out even:bg-lime-300 font-normal cursor-pointer  rounded-md px-4 py-2 text-xs flex items-center justify-center w-max"
          >
            {val}
          </span>
        ))}
    </div>
  );
};

export default ClassSubjects;
