import { EventType, Gender, Group, PrismaClient, Month, ClassList } from "@prisma/client"

const prisma = new PrismaClient();

const main = async () => {
  // admin creation
  await prisma.admin.create({
    data: {
      username: "mohit"
    }
  })

  //class Creation
  await prisma.class.createMany({
    data: [
      {
        id: ClassList.class_12,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_11,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_10,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_9,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_8,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_7,
        group: Group.Sunflower
      },

      {
        id: ClassList.class_6,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_5,
        group: Group.Sunflower
      },
      {
        id: ClassList.class_4,
        group: Group.Sunflower
      },
    ]
  })

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
        contactNo: '123456789',
        address: "Home Town colony, G-12",
        classId: ClassList.class_12
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
        contactNo: '123456789',
        address: "GC Colony,Fine Art Street - 78, House no. 412",
        classId: ClassList.class_12
      }
    ]
  })

  //teacher creation
  await prisma.teacher.createMany({
    data: [
      {
        username: 'monika',
        firstname: 'Monika',
        lastname: 'Suma',
        qualification: 'BCom',
        classId: ClassList.class_12,
        salary: 25000,
        lastSalaryPaid: Month.October
      },
      {
        username: 'suman',
        firstname: 'Suman',
        lastname: 'Shekawat',
        qualification: 'BCom',
        classId: ClassList.class_12,
        salary: 25000,
        lastSalaryPaid: Month.October
      }
    ]
  })

  //subject creation
  await prisma.subject.createMany({
    data: [
      {
        subjectName: 'Maths',
        teacherUsername: 'monika',
        classId: ClassList.class_12
      },
      {
        subjectName: 'Maths',
        teacherUsername: 'monika',
        classId: ClassList.class_11
      },
      {
        subjectName: 'Science',
        teacherUsername: 'suman',
        classId: ClassList.class_12
      },
      {
        subjectName: 'Social Science',
        teacherUsername: 'monika',
        classId: ClassList.class_12
      }
    ]
  })
  //event creation
  await prisma.event.createMany({
    data: [
      {
        eventName: 'Independence Day Cle',
        typeOfEvent: EventType.General,
        startDate: new Date('2024-10-26T10:00:00Z'),
        endDate: new Date('2024-10-26T10:00:00Z'),
        description: 'Independance Day Celebration'
      },
      {
        eventName: 'One piece',
        typeOfEvent: EventType.Specific,
        startDate: new Date('2024-11-02T10:00:00Z'),
        endDate: new Date('2024-11-02T10:00:00Z'),
        classId: ClassList.class_12,
        description: 'Tour'
      }
    ]
  })

  //fee creation
  await prisma.fee.createMany({
    data: [
      {
        amount: 500,
        classId: ClassList.class_4
      },
      {
        amount: 600,
        classId: ClassList.class_5
      },
      {
        amount: 700,
        classId: ClassList.class_6
      },
      {
        amount: 800,
        classId: ClassList.class_7
      },
      {
        amount: 900,
        classId: ClassList.class_8
      },
      {
        amount: 1000,
        classId: ClassList.class_9
      },
      {
        amount: 1100,
        classId: ClassList.class_10
      },
      {
        amount: 1200,
        classId: ClassList.class_11
      },
      {
        amount: 1200,
        classId: ClassList.class_12
      },
    ]
  })

  //exam creation
  await prisma.exam.createMany({
    data: [
      {
        startTime: new Date('2024-11-02T10:00:00Z'),
        endTime: new Date('2024-11-02T10:00:00Z'),
        classId: ClassList.class_12,
        subjectId: 1
      }
    ]
  })
  // result creation
  await prisma.result.createMany({
    data: [
      {
        stuId: 1,
        score: 72,
        examId: 1
      },
      {
        stuId: 2,
        score: 84,
        examId: 1
      }
    ]
  })


  //attendance creation
  await prisma.attendance.createMany({
    data: [
      {
        date: new Date(),
        studentAttendanceId: 1,
        present: true
      }, {
        date: new Date(),
        studentAttendanceId: 2,
        present: false
      }
    ]
  })

}

main()
  .then(() => {
    prisma.$disconnect()
  }).catch((error: any) => {
    prisma.$disconnect()
    console.log(error)
    process.exit(1)
  })