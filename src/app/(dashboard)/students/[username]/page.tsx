import { ClassData } from "@/components/Students/EachStudent/EachStudentTypes";
import {
  classData,
  countClass,
  StudentData,
} from "@/components/Students/EachStudent/ParticularStudentData";
import ClassCard from "@/components/Students/EachStudentComponents/ClassCard";
import FeeDetail from "@/components/Students/EachStudentComponents/FeeDetail";
import FirstRow from "@/components/Students/EachStudentComponents/FirtRow";
import PerformanceCard from "@/components/Students/EachStudentComponents/PerformanceCard";
import SecondRow from "@/components/Students/EachStudentComponents/SecondRow";
import { monthNames } from "@/components/Students/StudentTable/TableType";
import AddRemoveButton from "@/components/teachers/SingleTeacher/AddRemoveButton";
import { Divider } from "@mui/material";

const page = async ({ params }: { params: { username: string } }) => {
  const res = await params;

  const result = await StudentData(res.username);
  const countClassStudents = await countClass(res.username);
  const classdata = (await classData(res.username)) as ClassData;

  //for subjects and teachers
  const subjects: string[] = classdata["subjects"].map(
    (val) => val.subjectName
  );
  const teachers = Array.from(
    new Map(
      classdata["subjects"].map((val) => [val.teacherUsername, val])
    ).values()
  ).map((val) => val.teacherUsername);

  //for class
  const classname = result.classId.replace("class_", "").concat("th");
  const groupname = classdata["group"];

  //for fees
  const feesAmount = classdata["fees"][0].amount;
  const lastpaidMonth = result.feesPaidUpto;
  const monthIndex = monthNames.indexOf(lastpaidMonth) + 1;
  const currentMonth = new Date().getMonth();
  const countpendingMonths = currentMonth - monthIndex;
  const slicer = monthNames.slice(monthIndex, currentMonth);

  //for results
  // console.log(JSON.stringify(classdata.exams, null, 2));
  const mayResults = [];
  const temp = classdata.exams
    .filter((val) => val.monthname == "May")
    .map((val) => {
      return {
        subjectId: val.subjectId,
        marks: val.results[0].score,
      };
    });

  mayResults.push(...temp);


  return (
    <div className="flex justify-between flex-wrap gap-5">
      <div className="flex items-center w-full justify-between flex-wrap">
        <h1 className="w-max font-bold text-xl">{result.firstname + " " + result.lastname}</h1>
        <div className="flex w-max">
          <AddRemoveButton />
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
        <SecondRow subjects={subjects} teachers={teachers} />
        <Divider />
        {/* <PerformanceCard subjects={subjects} results={mayResults} /> */}
      </div>
      <div className="w-full xl:w-[30%] flex flex-wrap flex-col gap-5">
        <ClassCard
          classname={classname}
          group={groupname}
          total={countClassStudents}
        />
        <Divider />
        <FeeDetail
          amount={feesAmount}
          last_paid_for={lastpaidMonth}
          pending_months={slicer}
          total_pending_amount={countpendingMonths * feesAmount}
        />
      </div>
      
    </div>
  );
};

export default page;
