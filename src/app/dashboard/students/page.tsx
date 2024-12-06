import { StudentsFetch } from "@/components/Students/FetchStudents";
import { StudentTable } from "@/components/Students/StudentTable/Table";
import TotalStudentsContainer from "@/components/Students/TotalStudentAccToClass/TotalStudentsContainer";
import Divider from "@mui/material/Divider";

const page = async () => {
  const data = await StudentsFetch();
  return (
    <>
      <div className="flex md:gap-8 flex-col">
        <h1 className="font-bold text-xl">Students</h1>
        <Divider />
        <TotalStudentsContainer />
        <Divider />
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-gray-800">All Students</h1>
          <StudentTable students={data.arr} />
        </div>
      </div>
    </>
  );
};
export default page;
