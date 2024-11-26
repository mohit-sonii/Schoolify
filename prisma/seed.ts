import { ClassList, Group, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
const run = async() => {
  
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
}
run().then(() => {
  prisma.$disconnect()
})