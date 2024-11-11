import { StudentsFetch } from "@/components/Students/FetchStudents";
import { Table } from "@/components/Students/StudentTable/Table";
import TotalStudentsContainer from "@/components/Students/TotalStudentAccToClass/TotalStudentsContainer";
import Button from "@/components/Button";
import Divider from "@mui/material/Divider";

const page = async () => {
  const data = await StudentsFetch();
  return (
    <>
      <div className="flex md:gap-8 flex-col">
        <div className="flex w-full justify-end ">
          <Button innerText="Create Student" />
        </div>
        <TotalStudentsContainer />
        <Divider />
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-gray-600">All Students</h1>
          <Table students={data.arr} />
        </div>
      </div>
    </>
  );
};
export default page;
