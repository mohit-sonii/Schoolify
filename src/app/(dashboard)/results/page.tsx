import { Divider } from "@mui/material";
import React from "react";
import ResultTable from "@/components/Results/ResultTable";
import { fetchSubjectForClass } from "@/components/Results/Functions";

const page = async () => {
  const subject: string[] = await fetchSubjectForClass("class_12");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Results</h1>
      <Divider />
      <div className="w-full ">
        <ResultTable subjects={subject} />
      </div>
    </div>
  );
};

export default page;
