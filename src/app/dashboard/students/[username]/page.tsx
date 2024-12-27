import { ClassData } from "@/components/Students/EachStudent/EachStudentTypes";
import {
  classData,
  countClass,
  StudentData,
} from "@/components/Students/EachStudent/ParticularStudentData";
import ClassCard from "@/components/Students/EachStudentComponents/ClassCard";
import FeeDetail from "@/components/Students/EachStudentComponents/FeeDetail";
import FirstRow from "@/components/Students/EachStudentComponents/FirtRow";
// import PerformanceCard from "@/components/Students/EachStudentComponents/PerformanceCard";
import SecondRow from "@/components/Students/EachStudentComponents/SecondRow";
import { Divider } from "@mui/material";
import { months } from "@/components/Extra";

export default async function page({ params }: { params: any }) {

  const username = await params
  const result = await StudentData(username);


  // const countClassStudents = await countClass(username);
  // const classdata = (await classData(username)) as ClassData;

  // //for subjects and teachers
  // const subjects: string[] = classdata["subjects"].map(
  //   (val) => val.subjectName
  // );
  
  // //for class
  // const classname = result.classId.replace("class_", "").concat("th");
  // const groupname = classdata["group"];

  // //for fees
  // const feesAmount = classdata["fees"][0].amount;
  // const lastpaidMonth = result.feesPaidUpto;
  // const monthIndex = months.indexOf(lastpaidMonth) + 1;
  // const currentMonth = new Date().getMonth();
  // const countpendingMonths = currentMonth - monthIndex;
  // const slicer = months.slice(monthIndex, currentMonth);
  

  return (
    <div className="flex justify-between flex-wrap gap-5">
      <div className="flex items-center w-full justify-between flex-wrap">
        <h1 className="w-max font-bold text-xl">
          {result.firstname + " " + result.lastname}
        </h1>
        <div className="flex w-max">
        </div>
      </div>
      <div className="w-full xl:w-[65%]  gap-5 h-max flex flex-wrap flex-col justify-between">
        <Divider />
        <FirstRow
          firstname={result.firstname}
          lastname={result.lastname}
          gender={result.gender}
          mothername={result.motherName}
          fathername={result.fatherName}
          contact={result.contactNo}
          address={result.address}
        />
        <Divider />
        {/* <SecondRow subjects={subjects} teachers={teachers} /> */}
        <Divider />
        {/* <PerformanceCard subjects={subjects} results={mayResults} /> */}
      </div>
      <div className="w-full xl:w-[30%] flex flex-wrap flex-col gap-5">
        {/* <ClassCard
          classname={classname}
          group={groupname}
          total={countClassStudents}
        />
        <Divider /> */}
        {/* <FeeDetail
          amount={feesAmount}
          last_paid_for={lastpaidMonth}
          pending_months={slicer}
          total_pending_amount={countpendingMonths * feesAmount}
        /> */}
      </div>
    </div>
   
  );
};


