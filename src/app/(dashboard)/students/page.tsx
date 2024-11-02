import Table from "@/components/Students/StudentTable/Table"
import TotalStudentsContainer from "@/components/Students/TotalStudentAccToClass/TotalStudentsContainer"
import prisma from "@/utils/db"
import Image from 'next/image'


const page = async () => {
  const students = await prisma.student.findMany({
    select: {
      username: true,
      studentId: true,
      firstname: true,
      lastname: true,
      contactNo: true,
      admissionYear: true,
      classId: true,
      motherName: true,
      fatherName: true,
      gender: true,
      address: true,
      feesPaidUpto: true,
      passedOutYear: true,
    },
    take: 10
  }).then((res) => {
    const arr = res.map((val) => {
      return {
        StudentId: val.studentId,
        Username: val.username,
        "First Name": val.firstname,
        "Last Name": val.lastname,
        "Mother Name": val.motherName,
        "Father Name": val.fatherName,
        Gender: val.gender,
        "Contact No": val.contactNo,
        Address: val.address,
        "Fees Paid Upto": val.feesPaidUpto,
        "Admission Year": val.admissionYear,
        "Passing out Year": val.passedOutYear,
        Class: val.classId.replace("class_", "").concat(" std."),
      }
    })
    return {
      arr
    }
  })

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
          <Table students={students.arr} />
        </div>
      </div>
    </>
  )
}
export default page