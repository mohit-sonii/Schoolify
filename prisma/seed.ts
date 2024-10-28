import { EventType, Gender, Group, PrismaClient } from "@prisma/client"

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
      className: '10B',
      group: Group.Lily
    },
    {
      className: '11A',
      group: Group.Sunflower
    }
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
        contactNo: '123456789',
        address: "abc",
        classId: 1
      },
      {
        username: "second",
        firstname: "alex",
        lastname: "rus",
        motherName: "angel",
        fatherName: "rolex",
        gender: Gender.Male,
        contactNo: '123456789',
        address: "abc",
        classId: 2
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
        classId: 1
      },
      {
        username: 'secondTeacher',
        firstname: 'Second',
        lastname: 'lastname',
        qualification: 'BCom',
        classId: 2
      }
    ]
  })

  //subject creation
  await prisma.subject.createMany({
    data: [
      {
        subjectName: 'Maths',
        teacherId: 1,
        classId: 1
      },
      {
        subjectName: 'Science',
        teacherId: 1,
        classId: 2
      },
      {
        subjectName: 'Social Science',
        teacherId: 2,
        classId: 1
      },
      {
        subjectName: 'English',
        teacherId: 2,
        classId: 2
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
        classId: 1,
        description: 'Tour'
      }
    ]
  })

  //fee creation
  await prisma.fee.createMany({
    data: [
      {
        amount: 500,
        classId: 1
      }, {
        amount: 600,
        classId: 2
      }
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
        classId: 1,
        subjectId: 1,
        resultId: 1
      },
      {
        startTime: new Date('2024-11-02T10:00:00Z'),
        endTime: new Date('2024-11-02T10:00:00Z'),
        classId: 2,
        subjectId: 2,
        resultId: 2
      }
    ]
  })

  //attendance creation
  await prisma.attendance.createMany({
    data: [
      {
        studentAttendanceId: 1,
        present: true
      }, {
        studentAttendanceId: 2,
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