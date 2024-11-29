import React from "react";
import Divider from "@mui/material/Divider";
import {
  countStudents,
  fetchTeacherSubject,
  getOutstandingTotal,
} from "@/components/Class/Functions";
import ClassData from "@/components/Class/ClassData";
import { dataType } from "@/components/Class/Type";
import StudentsGenderChart from "@/components/Class/StudentsGenderChart";
import ClassOutstandingFees from "@/components/Class/ClassOutstandingFees";

const page = async () => {
  const result: dataType[] = await fetchTeacherSubject();
  // console.log(JSON.stringify(result,null,2))
  // const count: {
  //   total: number;
  //   boys: number;
  //   girls: number;
  // } = await countStudents("12th");
  // const outstandingFees = await getOutstandingTotal(
  //   "class_12",
  //   ""
  // );
  
  return (
    <div className="flex  flex-col  gap-5">
      <h1 className="w-full font-bold text-xl">Classes</h1>
      <Divider />
      <div className="w-full flex xl:flex-row flex-col justify-between ">
        <div className="w-full xl:w-[60%] flex ">
          {/* <ClassData data={result} /> */}
          <Divider orientation="vertical" />
        </div>
        <div className="w-full flex-col gap-5 xl:w-[35%] flex ">
          {/* <StudentsGenderChart
            total={count.total}
            boys={count.boys}
            girls={count.girls}
          /> */}
          <Divider />
          {/* <ClassOutstandingFees fees={outstandingFees} /> */}
          <Divider />
        </div>
      </div>
    </div>
  );
};

export default page;
