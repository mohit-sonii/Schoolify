import { ClassList, Group, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const run = async () => {
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
};
run().then(() => {
  prisma.$disconnect();
});
