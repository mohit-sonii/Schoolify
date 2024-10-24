import { PrismaClient } from "@prisma/client";
import { connect } from "http2";


const prisma = new PrismaClient()

async function main() {
  //admin creation
  await prisma.admin.create({
    data: {
      username: "mohit"
    }
  })


  //class Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.class.create({
      data: {
        name: `${i}A`,
      }
    })
  }
  // student creation
  for (let i = 1; i <= 5; i++) {
    await prisma.student.create({
      data: {
        username: `Student${i}`,
        firstname: `Student${i}`,
        lastname: `Student${i}`,
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        gender: i % 2 == 0 ? 'Male' : 'Female',
        contact: `A0000${i}`,
        classId: i
      }
    })
  }

  // Subject Creation
  const array = [
    { name: 'Maths' },
    { name: 'Science' },
    { name: 'Programming' },
    { name: 'DevOops' },
    { name: 'JavaScript' },
  ]
  for (const value of array) {
    await prisma.subject.create({ data: value })
  }

  //Teacher Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.teacher.create({
      data: {
        id: i,
        firstname: `Teacher${i}`,
        lastname: `LastName`,
        gender: i % 3 == 0 ? 'Male' : 'Female',
        username: `${i}A`,
        contact: `1245785${i}`,
        address: 'Kuva',
      }
    })
  }

  // Lesson Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.lesson.create({
      data: {
        name: `Lesson${i}`,
        classId: i,
        subjectId: i,
        teacherId: i
      }
    })
  }

  //Attendence Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.attendance.create({
      data: {
        studentId: i,
        present: i % 4 == 0 ? true : false
      }
    })
  }

  // Exam Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.exam.create({
      data: {
        id: i + 10,
        lessonId: i
      }
    })
  }
  //Result Creation
  for (let i = 1; i <= 5; i++) {
    await prisma.result.create({
      data: {
        score: i + 100,
        studentId: i,
        examId: i + 10
      }
    })
  }

  //event creation
  await prisma.event.create({
    data: {
      name: 'Mon Vart',
      classId: 4
    }
  })
}


main()
  .then(async () => {
    await prisma.$disconnect()
  }).catch(async (e) => {
    console.log(e);
    prisma.$disconnect();
    process.exit(1);
  })