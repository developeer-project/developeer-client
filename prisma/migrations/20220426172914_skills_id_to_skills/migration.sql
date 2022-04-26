/*
  Warnings:

  - You are about to drop the column `skills_id` on the `UserProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "skills_id",
ADD COLUMN     "skills" TEXT[];
