"use server";
import prisma from "@/utils/db";

export const StudentsFetch = async () => {
  const students = await prisma.student
    .findMany({
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
        class: {
          select: {
            id: true,
            fees: {
              select: {
                amount: true,
              },
            },
          },
        },
      },
    })
    .then((res) => {
      const arr = res.map((val) => {
        const paidUpto = new Date(`${val.feesPaidUpto} 1,2000`);
        const monthNumber = paidUpto.getMonth() + 1;
        const getMonthlyAmount = val.class.fees[0].amount;
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
          "Last Fees Paid": val.feesPaidUpto,
          "Admission Year": val.admissionYear,
          "Passing out Year": val.passedOutYear,
          Class: val.classId.replace("class_", "").concat("th"),
          "Outstanding Fees":
            Math.abs(new Date().getMonth() - monthNumber) * getMonthlyAmount,
        };
      });
      return {
        arr,
      };
    });
  return students;
};

export const fetchTotalStudents = async () => {
  const result = await prisma.class
    .findMany({
      select: {
        id: true,
        _count: {
          select: {
            totalStudents: true,
          },
        },
      },
    })
    .then((res) => {
      const arr = res.map((val) => {
        const filterClass = parseInt(val.id.replace("class_", ""));
        return {
          count: val._count.totalStudents,
          className: filterClass,
        };
      });
      arr.sort((a, b) => a.className - b.className);
      return {
        arr,
      };
    });
  return result.arr;
};
