import { EventType, Gender, Group, PrismaClient, Month,ClassList } from "@prisma/client"

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
    data: [{
      id: ClassList.class_4,
      group: Group.Lily
    },
    {
      id: ClassList.class_5,
      group: Group.Sunflower
    },
    {
      id: ClassList.class_6,
      group: Group.Sunflower
    },
    {
      id: ClassList.class_7,
      group: Group.Sunflower
    },
    {
      id: ClassList.class_8,
      group: Group.Sunflower
    },
    {
      id: ClassList.class_9,
      group: Group.Sunflower
    },
    {
      id: ClassList.class_10,
      group: Group.Sunflower
    },
    
    {
      id: ClassList.class_11,
      group: Group.Sunflower
    },
    
    {
      id: ClassList.class_12,
      group: Group.Sunflower
    },
    
    ]
  })

  // Student Creation
  await prisma.student.createMany({
    data: [
      {
        username: "first",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2022,
        feesPaidUpto:Month.July,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_12
      },
      {
        username: "werwer",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Female,
        admissionYear:2022,
        feesPaidUpto:Month.July,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_4
      },
      {
        username: "eqwrqewr",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Female,
        admissionYear:2021,
        feesPaidUpto:Month.July,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_5
      },
      {
        username: "second",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2023,
        feesPaidUpto:Month.May,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_4
      },
      {
        username: "forth",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2024,
        feesPaidUpto:Month.May,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_12
      },
      {
        username: "asdfasd",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2023,
        feesPaidUpto:Month.May,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_8
      },
      {
        username: "asdf",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2022,
        feesPaidUpto:Month.May,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_9
      },
      {
        username: "third",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        admissionYear:2024,
        feesPaidUpto:Month.June,
        contactNo: '123456789',
        address: "abc",
        classId: ClassList.class_10
      }
    ]
  })

  //teacher creation
  await prisma.teacher.createMany({
    data: [
      {
        username: 'firstTeacher',
        firstname: 'First',
        lastname: 'lastname',
        qualification: 'BCom',
        classId: ClassList.class_10,
        salary:25000
      },
      {
        username: 'secondTeacher',
        firstname: 'Second',
        lastname: 'lastname',
        qualification: 'BCom',
        classId: ClassList.class_12,
        salary:25000
      }
    ]
  })

  //subject creation
  await prisma.subject.createMany({
    data: [
      {
        subjectName: 'Maths',
        teacherId: 1,
        classId: ClassList.class_10
      },
      {
        subjectName: 'Science',
        teacherId: 1,
        classId: ClassList.class_7
      },
      {
        subjectName: 'Social Science',
        teacherId: 2,
        classId: ClassList.class_4
      },
      {
        subjectName: 'English',
        teacherId: 2,
        classId: ClassList.class_8
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
        classId: ClassList.class_4,
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

  // result creation
  await prisma.result.createMany({
    data: [
      {
        stuId: 1
      },
      {
        stuId: 2
      }
    ]
  })

  //exam creation
  await prisma.exam.createMany({
    data: [
      {
        startTime: new Date('2024-11-02T10:00:00Z'),
        endTime: new Date('2024-11-02T10:00:00Z'),
        classId: ClassList.class_4,
        subjectId: 1,
        resultId: 1
      },
      {
        startTime: new Date('2024-11-02T10:00:00Z'),
        endTime: new Date('2024-11-02T10:00:00Z'),
        classId: ClassList.class_4,
        subjectId: 2,
        resultId: 2
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
        date: new Date(), studentAttendanceId: 2,
        present: true
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