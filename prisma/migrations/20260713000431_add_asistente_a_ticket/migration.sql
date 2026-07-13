/*
  Warnings:

  - A unique constraint covering the columns `[id_asistente]` on the table `tickets_digitales` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_asistente` to the `tickets_digitales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tickets_digitales" ADD COLUMN     "id_asistente" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tickets_digitales_id_asistente_key" ON "tickets_digitales"("id_asistente");

-- AddForeignKey
ALTER TABLE "tickets_digitales" ADD CONSTRAINT "tickets_digitales_id_asistente_fkey" FOREIGN KEY ("id_asistente") REFERENCES "asistentes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
