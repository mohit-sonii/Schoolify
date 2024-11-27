/*
  Warnings:

  - You are about to drop the `_TeacherSubjects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subjects` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_TeacherSubjects" DROP CONSTRAINT "_TeacherSubjects_A_fkey";

-- DropForeignKey
ALTER TABLE "_TeacherSubjects" DROP CONSTRAINT "_TeacherSubjects_B_fkey";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "subjects" JSONB NOT NULL;

-- DropTable
DROP TABLE "_TeacherSubjects";
