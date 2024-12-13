import prisma from "@/utils/db";
import { Teacher } from "./Types";
import { months } from "@/components/Extra";

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
        subjects: true,
      },
    })
    .then((res) => {
      let filter: {
        [key: string]: string[]
      }[] = [{
        "": []
      }]
      if (res.subjects != null) {
        const data: {
          subjects: string[];
          classname: string;
        }[] = res.subjects as any;
        filter = data.map((val) => {
          return { [val.classname.toString()]: val.subjects }
        });
      }
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
        subjectAndClasses: filter,
        Gender: res.gender.toString(),
      };
    });
  return result;
};

export const findPending = async (
  lastPaid: string,
  salary: number
): Promise<{ pendingMonths: string[]; pendingTotalAmount: number }> => {
  const pending: string[] = [];
  let amount: number = 0;
  const currentMonthIdx = new Date().getMonth() - 1;
  let lastPaidIdx = months.indexOf(lastPaid) + 1;
  while (lastPaidIdx <= currentMonthIdx) {
    pending.push(months[lastPaidIdx++]);
    amount += salary;
  }
  return {
    pendingMonths: pending,
    pendingTotalAmount: amount,
  };
};
