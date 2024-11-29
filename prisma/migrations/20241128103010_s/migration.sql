/*
  Warnings:

  - You are about to drop the column `subjects` on the `Class` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Class" DROP COLUMN "subjects";

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "subjectName" TEXT NOT NULL,
    "classname" "ClassList" NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_classname_fkey" FOREIGN KEY ("classname") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
