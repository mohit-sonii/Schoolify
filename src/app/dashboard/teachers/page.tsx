import AverageSalary from "@/components/teachers/AverageSalary";
import NumberOfTeacherChart from "@/components/teachers/NumberOfTeacherChart";
import TeacherCount from "@/components/teachers/TeacherCount";
import TeacherTable from "@/components/teachers/TeacherTable";
import { Divider } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schoolify | Teachers",
  description: "teachers",
};
const page = async () => {

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-bold text-xl">Teachers</h1>
      <Divider />
      <div className="flex  flex-col xl:flex-row w-full gap-5 justify-between">
        <TeacherCount />
        <AverageSalary />
      </div>
      <Divider />
      <NumberOfTeacherChart />
      <Divider />
      <TeacherTable />
    </div>
  );
};

export default page;
