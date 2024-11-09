import { StudentsFetch } from "@/components/Students/FetchStudents"
import {Table} from "@/components/Students/StudentTable/Table"
import TotalStudentsContainer from "@/components/Students/TotalStudentAccToClass/TotalStudentsContainer"
import Image from 'next/image'

const page = async () => {
  const data = await StudentsFetch()
  return (
    <>
      <div className="flex md:gap-8 flex-col">
        <div className="flex w-full justify-end ">
          <button className='px-4 py-2 border-none shadow-lg outline-none text-xs font-medium text-gray-700 rounded-lg bg-white transition-all ease-in-out hover:text-black flex gap-2 flex-row items-center justify-center'>
            <Image src="/create.svg" alt="" width={15} height={15} />
            <span>Create Student</span>
          </button>
        </div>
        <TotalStudentsContainer />
        <div className="flex flex-col gap-4 w-full">
          <h1 className="font-semibold text-gray-600">All Students</h1>
          <Table students={data.arr} />
        </div>
      </div>
    </>
  )
}
export default page