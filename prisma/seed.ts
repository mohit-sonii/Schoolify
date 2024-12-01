const { ClassList, Gender, Group, Month, PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const run = async () => {
  await prisma.admin.create({
    data: {
      username:"mohit"
    }
  })
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
  await prisma.subject.createMany({
    data: [
      {
        subjectName: "Maths",
        classname: ClassList.class_12,
      },
      {
        subjectName: "English",
        classname: ClassList.class_11,
      },
    ],
  });
  await prisma.student.createMany({
    data: [
      {
        username: "first",
        firstname: "Mohit",
        lastname: "Robbin",
        motherName: "Sulekha",
        fatherName: "Sunil",
        gender: Gender.Male,
        contactNo: "1234567894",
        address: "bac newar color",
        feesPaidUpto: Month.May,
        classId: ClassList.class_12,
        admissionYear: 2024,
        dob: "21/02/2004",
      },
      {
        username: "second",
        firstname: "Love",
        lastname: "Shekh",
        motherName: "Hakib",
        fatherName: "Shekh Salman",
        gender: Gender.Male,
        contactNo: "1234567894",
        address: "bac newar color",
        feesPaidUpto: Month.May,
        classId: ClassList.class_12,
        admissionYear: 2024,
        dob: "21/02/2004",
      },
    ],
  });
  await prisma.expense.createMany({
    data: [
      {
        monthName: Month.January,
        date: 24,
        amount: 12500,
        year: 2024,
        description: "School maintance check",
        title: "School Inspection",
      },
      {
        monthName: Month.March,
        date: 1,
        amount: 8250,
        year: 2024,
        description: "Anuual Function Expense for all classes",
        title: "Annual Function 2024",
      },
    ],
  });
  await prisma.gain.createMany({
    data: [
      {
        monthName: Month.January,
        date: 28,
        amount: 85623,
        year: 2024,
        description: "Total Rent for 5 Properties",
        title: "Property Rent",
      },
      {
        monthName: Month.March,
        date: 1,
        amount: 1250,
        year: 2024,
        description: "Maintance Pay for rent houses",
        title: "Maintance Recieved",
      },
    ],
  });
  await prisma.teacher.create({
    data: {
      username: "first-Teacher",
      firstname: "Suman",
      lastname: "Lavesh",
      qualification: "B.tech",
      joiningDate: 5,
      joiningYear: 2021,
      joiningMonth: Month.February,
      gender: Gender.Female,
      lastSalaryPaid: Month.August,
      contactNo: "1234567895",
      address: "NEar student home",
      salary: 45290,
      classes: {
        connect: [{ id: ClassList.class_12 }, { id: ClassList.class_11 }],
      },
      subjects:{}
    },
  });
};
run().then(() => {
  prisma.$disconnect();
});
