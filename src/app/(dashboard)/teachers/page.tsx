import AverageSalary from "@/components/teachers/AverageSalary";
import {
  averageSalary,
  getAllTeachers,
  teacherCount,
} from "@/components/teachers/Functions";
import NumberOfTeacherChart from "@/components/teachers/NumberOfTeacherChart";
import TeacherCount from "@/components/teachers/TeacherCount";
import TeacherTable from "@/components/teachers/TeacherTable";
import { Divider } from "@mui/material";
import React from "react";

const page = async () => {
  const currentYear = new Date().getFullYear();
  const totalTeachers = await teacherCount();
  const avgSalary = await averageSalary(currentYear);
  const allTeachers = await getAllTeachers();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Teachers</h1>
      <Divider />
      <div className="flex  flex-col xl:flex-row w-full gap-5 justify-between">
        <TeacherCount value={totalTeachers} />
        <AverageSalary value={avgSalary} />
      </div>
      <Divider />
      <NumberOfTeacherChart />
      <Divider />
      <TeacherTable teachers={allTeachers} />
    </div>
  );
};

export default page;
