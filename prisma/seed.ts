import {
  EventType,
  Gender,
  Group,
  MonthsOfExam,
  PrismaClient,
  Month,
  ClassList,
} from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // admin creation
  await prisma.admin.create({
    data: {
      username: "mohit",
    },
  });

  //class Creation
  await prisma.class.createMany({
    data: [
      {
        id: ClassList.class_12,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_11,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_10,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_9,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_8,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_7,
        group: Group.Sunflower,
      },

      {
        id: ClassList.class_6,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_5,
        group: Group.Sunflower,
      },
      {
        id: ClassList.class_4,
        group: Group.Sunflower,
      },
    ],
  });

  // Student Creation
  await prisma.student.createMany({
    data: [
      {
        username: "one",
        firstname: "Alex",
        lastname: "Rux",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear: 2022,
        dob: new Date(),
        feesPaidUpto: Month.September,
        contactNo: "123456789",
        address: "Home Town colony, G-12",
        classId: ClassList.class_12,
      },
      {
        username: "two",
        firstname: "Angel",
        lastname: "Priya",
        motherName: "Analisa",
        fatherName: "Mike",
        gender: Gender.Female,
        dob: new Date(),
        admissionYear: 2022,
        feesPaidUpto: Month.July,
        contactNo: "123456789",
        address: "GC Colony,Fine Art Street - 78, House no. 412",
        classId: ClassList.class_12,
      },
      {
        username: "thress",
        firstname: "Shivam",
        lastname: "Mlik",
        motherName: "Analisa",
        fatherName: "Mike",
        gender: Gender.Female,
        dob: new Date(),
        admissionYear: 2022,
        feesPaidUpto: Month.July,
        contactNo: "123456789",
        address: "GC Colony,Fine Art Street - 78, House no. 412",
        classId: ClassList.class_11,
      },
    ],
  });

  //teacher creation
  await prisma.teacher.createMany({
    data: [
      {
        username: "monika",
        firstname: "Monika",
        lastname: "Suma",
        qualification: "BCom",
        classId: ClassList.class_12,
        salary: 25000,
        contactNo: "123456789",
        address: "Near me",
        joiningDate: 14,
        gender: Gender.Female,
        joiningYear: 2023,
        joiningMonth: Month.February,
        lastSalaryPaid: Month.October,
      },
      {
        username: "suman",
        firstname: "Suman",
        lastname: "Shekawat",
        gender: Gender.Female,

        qualification: "BCom",
        classId: ClassList.class_12,
        salary: 25000,
        joiningYear: 2024,
        contactNo: "123456789",
        address: "Near me",
        joiningDate: 18,
        joiningMonth: Month.March,
        lastSalaryPaid: Month.October,
      },
    ],
  });

  // Subject creation
  const subjects = await prisma.subject.createMany({
    data: [
      {
        subjectName: "Maths",
        teacherUsername: "monika",
        classId: ClassList.class_12,
      },
      {
        subjectName: "Maths",
        teacherUsername: "monika",
        classId: ClassList.class_11,
      },
      {
        subjectName: "Science",
        teacherUsername: "suman",
        classId: ClassList.class_12,
      },
      {
        subjectName: "Social Science",
        teacherUsername: "monika",
        classId: ClassList.class_12,
      },
      {
        subjectName: "Social Science",
        teacherUsername: "monika",
        classId: ClassList.class_11,
      },
    ],
  });

  // Exam month creation
  await prisma.examMonth.createMany({
    data: [
      { name: MonthsOfExam.May },
      { name: MonthsOfExam.September },
    ],
  });

  // Exam creation
  await prisma.exam.createMany({
    data: [
      {
        classId: ClassList.class_12,
        subjectname: "Maths", // Match subjectName with an existing subject
        monthname: "May",    // Use the enum value correctly
        date: 20,            // Add the date field if defined in your schema
      },
      {
        classId: ClassList.class_12,
        subjectname: "Science",
        monthname: "May",
        date: 25,
      },
      {
        classId: ClassList.class_11,
        subjectname: "Maths",
        monthname: "September",
        date: 10,
      },
      {
        classId: ClassList.class_12,
        subjectname: "Maths",
        monthname: "September",
        date: 15,
      },
    ],
  });


  // result creation
  await prisma.result.createMany({
    data: [
      {
        score: 80,
        stuId: 1,
        examMonthId: MonthsOfExam.May,
        examId: 1,
      },
      {
        score: 99,
        stuId: 2,
        examMonthId: MonthsOfExam.May,
        examId: 1,
      },
      {
        score: 88,
        stuId: 1,
        examMonthId: MonthsOfExam.May,
        examId: 2,
      },
      {
        score: 75,
        stuId: 2,
        examMonthId: MonthsOfExam.May,
        examId: 2,
      },
      {
        score: 74,
        stuId: 1,
        examMonthId: MonthsOfExam.September,
        examId: 4,
      },
      {
        score: 89,
        stuId: 2,
        examMonthId: MonthsOfExam.September,
        examId: 4,
      },
      {
        score: 89,
        stuId: 3,
        examMonthId: MonthsOfExam.September,
        examId: 3,
      },
    ],
  });
  //event creation
  await prisma.event.createMany({
    data: [
      {
        eventName: "Independence Day Cle",
        typeOfEvent: EventType.General,
        startDate: new Date("2024-10-26T10:00:00Z"),
        endDate: new Date("2024-10-26T10:00:00Z"),
        description: "Independance Day Celebration",
      },
      {
        eventName: "One piece",
        typeOfEvent: EventType.Specific,
        startDate: new Date("2024-11-02T10:00:00Z"),
        endDate: new Date("2024-11-02T10:00:00Z"),
        classId: ClassList.class_12,
        description: "Tour",
      },
    ],
  });

  //fee creation
  await prisma.fee.createMany({
    data: [
      {
        amount: 500,
        classId: ClassList.class_4,
      },
      {
        amount: 600,
        classId: ClassList.class_5,
      },
      {
        amount: 700,
        classId: ClassList.class_6,
      },
      {
        amount: 800,
        classId: ClassList.class_7,
      },
      {
        amount: 900,
        classId: ClassList.class_8,
      },
      {
        amount: 1000,
        classId: ClassList.class_9,
      },
      {
        amount: 1100,
        classId: ClassList.class_10,
      },
      {
        amount: 1200,
        classId: ClassList.class_11,
      },
      {
        amount: 1200,
        classId: ClassList.class_12,
      },
    ],
  });

  //attendance creation
  await prisma.attendance.createMany({
    data: [
      {
        date: new Date(),
        studentAttendanceId: 1,
        present: true,
      },
      {
        date: new Date(),
        studentAttendanceId: 2,
        present: false,
      },
    ],
  });

  await prisma.expense.createMany({
    data: [
      {
        monthName: Month.March,
        date: 17,
        amount: 10000,
        year: 2024,
        description: "Annual Function Expenses",
        title: "Annual Function",
      },
      {
        monthName: Month.March,
        date: 20,
        year: 2024,
        amount: 32650,
        description: "Property Rent",
        title: "Property Rent",
      },
      {
        monthName: Month.June,
        date: 17,
        year: 2024,
        amount: 18000,
        description: "Function Expenses",
        title: "Local Function",
      },
    ],
  });
  await prisma.gain.createMany({
    data: [
      {
        monthName: Month.August,
        date: 20,
        amount: 15200,
        year: 2024,
        description: "Gainned from the Property Rent",
        title: "Property Rent",
      },
      {
        monthName: Month.September,
        date: 20,
        amount: 14275,
        year: 2024,
        description: "Gainned from the Property Rent",
        title: "Month Rent",
      },
      {
        monthName: Month.September,
        date: 30,
        year: 2024,
        amount: 7452,
        description: "Gainned from the Property Rent",
        title: "Home Rent",
      },
    ],
  });
};

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((error: any) => {
    prisma.$disconnect();
    console.log(error);
    process.exit(1);
  });
