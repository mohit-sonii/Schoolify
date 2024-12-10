import { StudentTable } from "@/components/Students/StudentTable/Table";
import TotalStudentsContainer from "@/components/Students/TotalStudentAccToClass/TotalStudentsContainer";
import Divider from "@mui/material/Divider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schoolify | Students",
  description: "students",
};
const page = async () => {
  return (
    <>
      <div className="flex md:gap-8 flex-col">
        <h1 className="font-bold text-xl">Students</h1>
        <Divider />
        <TotalStudentsContainer />
        <Divider />
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-gray-800">All Students</h1>
          <StudentTable />
        </div>
      </div>
    </>
  );
};
export default page;
