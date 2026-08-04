/*
  Warnings:

  - You are about to drop the `asistencias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `asistentes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `compradores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `entradas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eventos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lugares` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ordenes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tickets_digitales` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "event_status" AS ENUM ('CONFIRMED', 'FINISHED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "role_user" AS ENUM ('ASSISTANT', 'ORGANISER', 'ADMIN');

-- CreateEnum
CREATE TYPE "status_digital_ticket" AS ENUM ('UNSCANNED', 'SCANNED');

-- CreateEnum
CREATE TYPE "order_status" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'EXPIRED');

-- DropForeignKey
ALTER TABLE "asistencias" DROP CONSTRAINT "asistencias_id_asistente_fkey";

-- DropForeignKey
ALTER TABLE "asistencias" DROP CONSTRAINT "asistencias_id_evento_fkey";

-- DropForeignKey
ALTER TABLE "entradas" DROP CONSTRAINT "entradas_id_evento_fkey";

-- DropForeignKey
ALTER TABLE "eventos" DROP CONSTRAINT "eventos_id_lugar_fkey";

-- DropForeignKey
ALTER TABLE "eventos" DROP CONSTRAINT "eventos_id_organizador_fkey";

-- DropForeignKey
ALTER TABLE "ordenes" DROP CONSTRAINT "ordenes_id_comprador_fkey";

-- DropForeignKey
ALTER TABLE "tickets_digitales" DROP CONSTRAINT "tickets_digitales_id_asistente_fkey";

-- DropForeignKey
ALTER TABLE "tickets_digitales" DROP CONSTRAINT "tickets_digitales_id_comprador_cod_orden_fkey";

-- DropTable
DROP TABLE "asistencias";

-- DropTable
DROP TABLE "asistentes";

-- DropTable
DROP TABLE "compradores";

-- DropTable
DROP TABLE "entradas";

-- DropTable
DROP TABLE "eventos";

-- DropTable
DROP TABLE "lugares";

-- DropTable
DROP TABLE "ordenes";

-- DropTable
DROP TABLE "organizadores";

-- DropTable
DROP TABLE "tickets_digitales";

-- DropEnum
DROP TYPE "estado_evento";

-- DropEnum
DROP TYPE "estado_ticket_digital";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "role" "role_user" NOT NULL DEFAULT 'ASSISTANT',
    "doc_type" TEXT NOT NULL,
    "doc_number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "cuit" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "description" TEXT,
    "province" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "street_number" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "date_time_start" TIMESTAMP(3) NOT NULL,
    "date_time_end" TIMESTAMP(3) NOT NULL,
    "status" "event_status" NOT NULL DEFAULT 'CONFIRMED',
    "total_stock" INTEGER NOT NULL,
    "date_time_cancellation" TIMESTAMP(3),
    "id_user" INTEGER NOT NULL,
    "id_place" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entries" (
    "id" SERIAL NOT NULL,
    "entry_name" TEXT NOT NULL,
    "entry_description" TEXT,
    "unit_price" DECIMAL(10,2) NOT NULL,
    "date_time_start" TIMESTAMP(3) NOT NULL,
    "date_time_end" TIMESTAMP(3) NOT NULL,
    "stock" INTEGER NOT NULL,
    "sold_stock" INTEGER NOT NULL DEFAULT 0,
    "id_event" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" "order_status" NOT NULL DEFAULT 'PENDING',
    "total" DECIMAL(10,2) NOT NULL,
    "date_time_payment" TIMESTAMP(3),
    "payment_reference" TEXT,
    "id_user" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_items" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" DECIMAL(10,2) NOT NULL,
    "subtotal" DECIMAL(10,2) NOT NULL,
    "id_order" INTEGER NOT NULL,
    "id_entry" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "order_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "digital_tickets" (
    "id" SERIAL NOT NULL,
    "qr_code" TEXT NOT NULL,
    "status" "status_digital_ticket" NOT NULL DEFAULT 'UNSCANNED',
    "date_time_scan" TIMESTAMP(3),
    "id_order_item" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "digital_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assists" (
    "id_user" INTEGER NOT NULL,
    "id_event" INTEGER NOT NULL,
    "date_time_assist" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "assists_pkey" PRIMARY KEY ("id_user","id_event")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_telephone_key" ON "users"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "users_doc_type_doc_number_key" ON "users"("doc_type", "doc_number");

-- CreateIndex
CREATE UNIQUE INDEX "entries_id_event_entry_name_key" ON "entries"("id_event", "entry_name");

-- CreateIndex
CREATE UNIQUE INDEX "order_items_id_order_id_entry_key" ON "order_items"("id_order", "id_entry");

-- CreateIndex
CREATE UNIQUE INDEX "digital_tickets_qr_code_key" ON "digital_tickets"("qr_code");

-- CreateIndex
CREATE INDEX "digital_tickets_id_order_item_idx" ON "digital_tickets"("id_order_item");

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_place_fkey" FOREIGN KEY ("id_place") REFERENCES "places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entries" ADD CONSTRAINT "entries_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_id_entry_fkey" FOREIGN KEY ("id_entry") REFERENCES "entries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "digital_tickets" ADD CONSTRAINT "digital_tickets_id_order_item_fkey" FOREIGN KEY ("id_order_item") REFERENCES "order_items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "digital_tickets" ADD CONSTRAINT "digital_tickets_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assists" ADD CONSTRAINT "assists_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assists" ADD CONSTRAINT "assists_id_event_fkey" FOREIGN KEY ("id_event") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
