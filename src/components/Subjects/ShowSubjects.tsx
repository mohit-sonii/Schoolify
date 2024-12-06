"use client";
import { FetchClassSubjects } from "./FetchClassSubjects";
import Cards from "./Cards";
import React, { useState, useEffect } from "react";
import useModalStore from "@/utils/store";

export const ShowSubjects = () => {
  const [fetchData, setFetchData] = useState<
    { classname: string; subjectList: string[] }[]
  >([]);
  const currValue = useModalStore((state) => state.subjectRenderState);
  useEffect(() => {
    const fetch = async () => {
      return await FetchClassSubjects();
    };
    fetch().then((val) => setFetchData(val));
  }, [currValue]);
  
  return (
    <div className="flex w-full gap-5 items-center flex-col mb-9">
      {fetchData &&
        fetchData.map((val) => (
          <div key={val.classname} className="flex flex-col w-full gap-4 odd:bg-gray-500 even:bg-gray-800 rounded-md">
            <Cards
              key={val.classname}
              classname={val.classname.replace("_", " ")}
              subjectList={val.subjectList}
            />
          </div>
        ))}
    </div>
  );
};
