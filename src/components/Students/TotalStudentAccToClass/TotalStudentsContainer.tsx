"use client";
import { useEffect, useState } from "react";
import TotalStudents from "./TotalStudents";
import useModalStore from "@/utils/store";
import { fetchTotalStudents } from "../FetchStudents";

const TotalStudentsContainer = () => {
  const currValue = useModalStore((state) => state.studentRenderState);
  const [fetchResult, setFetchResult] = useState<
    { count: number; className: number }[]
  >([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchTotalStudents();
      setFetchResult(result);
    };
    fetch()
  }, [currValue]);

  return (
    <div className="w-full flex flex-col flex-wrap gap-2">
      <h1 className="font-semibold text-gray-800">
        Number of Students Per Class
      </h1>
      <TotalStudents range={fetchResult} />
    </div>
  );
};

export default TotalStudentsContainer;
