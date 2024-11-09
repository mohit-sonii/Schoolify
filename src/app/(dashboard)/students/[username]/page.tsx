import { StudentData } from "@/components/Students/EachStudent/ParticularStudentData";
import ClassCard from "@/components/Students/EachStudentComponents/ClassCard";
import FeeDetail from "@/components/Students/EachStudentComponents/FeeDetail";
import FirstRow from "@/components/Students/EachStudentComponents/FirtRow";
import SecondRow from "@/components/Students/EachStudentComponents/SecondRow";
import { monthNames } from "@/components/Students/StudentTable/TableType";

type subjectType = {
  subjectName: string;
  teacherUsername: string;
};
type groupType = {
  class: {
    group: string
  }
}

const page = async ({ params }: { params: { username: string } }) => {
  const res = await params;

  const result = await StudentData(res.username);

  //for student detials
  let arr = Object.values(result[0].class)[4] as subjectType[];

  //for subjects and teachers
  const subjects = arr.map((val) => val.subjectName);
  const teachers = Array.from(
    new Map(arr.map((val) => [val.teacherUsername, val])).values()
  ).map((val) => val.teacherUsername);

  //for class
  const classname = result[0].classId.replace("class_", "").concat("th");
  const groupname = result[2] as unknown as groupType

  //for fees
  const feesAmount = result[0].class["fees"][0].amount
  const lastpaidMonth = result[0].feesPaidUpto
  const monthIndex = monthNames.indexOf(lastpaidMonth)+1 //month index
  const currentMonth = new Date().getMonth()
  const countpendingMonths = currentMonth - monthIndex
  const slicer = monthNames.slice(monthIndex,currentMonth)


  return (
    <div className="flex justify-between ">
      <div className="w-[65%]  gap-5 h-max flex flex-wrap flex-col justify-between">
        <FirstRow
          firstname={result[0]?.firstname}
          lastname={result[0]?.lastname}
          gender={result[0]?.gender}
          mothername={result[0]?.motherName}
          fathername={result[0]?.fatherName}
          contact={result[0]?.contactNo}
          address={result[0]?.address}
        />
        <SecondRow
          subjects={subjects}
          teachers={teachers}
        />
      </div>
      <div className="w-[30%] flex flex-wrap flex-col gap-5">
        <ClassCard classname={classname} group={groupname.class.group} total={result[1]} />
        <FeeDetail amount={feesAmount} last_paid_for={lastpaidMonth} pending_months={slicer } total_pending_amount={countpendingMonths * feesAmount} />

      </div>
    </div>
  );
};

export default page;
