/*
  Warnings:

  - You are about to drop the `assists` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "assists" DROP CONSTRAINT "assists_id_event_fkey";

-- DropForeignKey
ALTER TABLE "assists" DROP CONSTRAINT "assists_id_user_fkey";

-- DropTable
DROP TABLE "assists";
