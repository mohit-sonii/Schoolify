import AddRemoveButton from "@/components/teachers/SingleTeacher/AddRemoveButton";
import FirstRow from "@/components/teachers/SingleTeacher/FirstRow";
import {
  findPending,
  teacherData,
} from "@/components/teachers/SingleTeacher/Functions";
import PerformanceChart from "@/components/teachers/SingleTeacher/PerformanceChart";
import Salary from "@/components/teachers/SingleTeacher/Salary";
import Subjects from "@/components/teachers/SingleTeacher/Subjects";
import { Divider } from "@mui/material";
import React from "react";

const page = async ({ params }: { params: { username: string } }) => {
  const res = await params;
  const data = await teacherData(res.username);
  const {
    pendingMonths,
    pendingTotalAmount,
  }: { pendingMonths: string[]; pendingTotalAmount: number } =
    await findPending(data["Last Paid"], data.Salary);

  return (
    <div className="flex justify-between flex-wrap gap-5">
      <div className="flex items-center w-full justify-between flex-wrap">
        <h1 className="w-max font-bold text-xl">{data["Full Name"]}</h1>
        <div className="flex w-max">
          <AddRemoveButton/>
        </div>
      </div>

      <div className="w-full xl:w-[65%]  gap-5 h-max flex flex-wrap flex-col justify-between">
        <Divider />
        <FirstRow
          id={data["Joinne Id"]}
          name={data["Full Name"]}
          qualification={data.Qualifications}
          gender={data.Gender}
          contact={data["Contact Number"]}
          address={data.Address}
          arrival={data["Date of Arrival"]}
          servingInPresent={data["Serving in Present"]}
          lastServe={data["Last Serve"]}
        />
        <Divider />
        <PerformanceChart/>
      </div>
      <div className="w-full xl:w-[30%] flex flex-wrap flex-col gap-5">
        <Salary
          amount={data.Salary}
          lastPaid={data["Last Paid"]}
          pendingAmount={pendingTotalAmount}
          monthsPending={pendingMonths}
        />
        <Divider />
        <Subjects subject={data.Subject } classes={data.Classes} />
      </div>
    </div>
  );
};

export default page;
