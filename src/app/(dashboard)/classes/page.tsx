import React from "react";
import Divider from "@mui/material/Divider";
import { fetchTeacherSubject } from "@/components/Class/Functions";
import ClassData from "@/components/Class/ClassData";
import { dataType } from "@/components/Class/Type";

const page = async () => {
  const result: dataType[] = await fetchTeacherSubject()
  return (
    <div className="flex justify-between flex-wrap gap-5">
      <h1 className="w-max font-bold text-xl">Classes</h1>
      <Divider />
      <ClassData data={result} />
    </div>

  );
};

export default page;
