/*
  Warnings:

  - You are about to drop the `_LinksToUserProfile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `Links` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `Links` table without a default value. This is not possible if the table is not empty.
  - Added the required column `has_registered` to the `UserProfile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_LinksToUserProfile" DROP CONSTRAINT "_LinksToUserProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinksToUserProfile" DROP CONSTRAINT "_LinksToUserProfile_B_fkey";

-- AlterTable
ALTER TABLE "Links" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "has_registered" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "_LinksToUserProfile";

-- CreateIndex
CREATE UNIQUE INDEX "Links_user_id_key" ON "Links"("user_id");

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
