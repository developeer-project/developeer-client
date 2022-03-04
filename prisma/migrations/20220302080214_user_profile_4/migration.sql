/*
  Warnings:

  - You are about to drop the `_SkillsToUserProfile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_profile_id` to the `Skills` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_SkillsToUserProfile" DROP CONSTRAINT "_SkillsToUserProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_SkillsToUserProfile" DROP CONSTRAINT "_SkillsToUserProfile_B_fkey";

-- AlterTable
ALTER TABLE "Skills" ADD COLUMN     "user_profile_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_SkillsToUserProfile";

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_user_profile_id_fkey" FOREIGN KEY ("user_profile_id") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
