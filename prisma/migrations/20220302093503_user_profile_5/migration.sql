/*
  Warnings:

  - You are about to drop the column `user_profile_id` on the `Skills` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skills" DROP CONSTRAINT "Skills_user_profile_id_fkey";

-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "user_profile_id";

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "skills_id" INTEGER[];
