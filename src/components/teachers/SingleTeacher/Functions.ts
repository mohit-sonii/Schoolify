import prisma from "@/utils/db";
import { Teacher } from "./Types";
import { months } from "@/components/Admin/OutstandingDues/OutStandingAmount";


export const teacherData = async (user: string): Promise<Teacher> => {
  const result: Teacher = await prisma.teacher
    .findFirstOrThrow({
      where: {
        username: user,
      },
      select: {
        id: true,
        address: true,
        contactNo: true,
        firstname: true,
        lastname: true,
        qualification: true,
        joiningDate: true,
        joiningMonth: true,
        joiningYear: true,
        lastSalaryPaid: true,
        salary: true,
        gender: true,
        servedPresent: true,
        servedTill: true,
        subject: {
          select: {
            subjectName: true,
            classId: true,
          },
        },
      },
    })
    .then((res) => {
      const subjectsName: string[] = [];
      const classNames: string[] = [];
      res.subject.map((val) => {
        subjectsName.push(val.subjectName);
        classNames.push(val.classId.replace("class_", "").concat("th"));
      });
      return {
        "Joinne Id": res.id,
        Address: res.address,
        "Contact Number": res.contactNo,
        "Full Name": res.firstname + " " + res.lastname,
        Qualifications: res.qualification,
        "Date of Arrival":
          res.joiningDate + " " + res.joiningMonth + " " + res.joiningYear,
        Salary: res.salary,
        "Serving in Present": res.servedPresent ? "Yes" : "No",
        "Last Serve":
          res.servedTill?.toString() == "" ? "---" : res.servedTill?.toString(),
        "Last Paid": res.lastSalaryPaid.toString(),
        Subject: subjectsName,
        Classes: classNames,
        Gender: res.gender.toString()
      };
    });
  return result;
};

export const findPending = async (lastPaid: string, salary: number): Promise<{ pendingMonths: string[], pendingTotalAmount: number }> => {
  const pending: string[] = []
  let amount:number = 0;
  const currentMonthIdx = new Date().getMonth() - 1
  let lastPaidIdx = months.indexOf(lastPaid) + 1
  while (lastPaidIdx <= currentMonthIdx) {
    pending.push(months[lastPaidIdx++])
    amount += salary;
  }
  return {
    pendingMonths: pending,
    pendingTotalAmount: amount
  }

}


