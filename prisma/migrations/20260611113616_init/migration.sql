-- CreateEnum
CREATE TYPE "estado_evento" AS ENUM ('PENDIENTE', 'CONFIRMADO', 'REALIZADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "estado_ticket_digital" AS ENUM ('NO_ESCANEADO', 'ESCANEADO');

-- CreateTable
CREATE TABLE "asistencias" (
    "id_asistente" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "fecha_hora_asistencia" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "asistencias_pkey" PRIMARY KEY ("id_asistente","id_evento")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "fecha_hora_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_hora_fin" TIMESTAMP(3) NOT NULL,
    "estado" "estado_evento" NOT NULL DEFAULT 'PENDIENTE',
    "id_organizador" INTEGER NOT NULL,
    "id_lugar" INTEGER NOT NULL,
    "fecha_hora_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_hora_cancelacion" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lugares" (
    "id" SERIAL NOT NULL,
    "capacidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "ciudad" TEXT NOT NULL,
    "calle" TEXT NOT NULL,
    "altura" TEXT NOT NULL,
    "cp" INTEGER NOT NULL,
    "provincia" TEXT NOT NULL,

    CONSTRAINT "lugares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entradas" (
    "id_evento" INTEGER NOT NULL,
    "cod" SERIAL NOT NULL,
    "tipo_entrada" TEXT NOT NULL,
    "precio_unitario" DECIMAL(10,2) NOT NULL,
    "horario_inicio" TIMESTAMP(3) NOT NULL,
    "horario_fin" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "entradas_pkey" PRIMARY KEY ("id_evento","cod")
);

-- CreateTable
CREATE TABLE "ordenes" (
    "id_comprador" INTEGER NOT NULL,
    "cod" SERIAL NOT NULL,
    "fecha_hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "precio_unitario" DECIMAL(10,2) NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio_total" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ordenes_pkey" PRIMARY KEY ("id_comprador","cod")
);

-- CreateTable
CREATE TABLE "tickets_digitales" (
    "id_comprador" INTEGER NOT NULL,
    "cod_orden" INTEGER NOT NULL,
    "cod" SERIAL NOT NULL,
    "qr" TEXT NOT NULL,
    "estado" "estado_ticket_digital" NOT NULL DEFAULT 'NO_ESCANEADO',
    "fecha_hora_uso" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_digitales_pkey" PRIMARY KEY ("id_comprador","cod_orden","cod")
);

-- CreateTable
CREATE TABLE "asistentes" (
    "id" SERIAL NOT NULL,
    "t_doc" TEXT NOT NULL,
    "n_doc" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "asistentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizadores" (
    "id" SERIAL NOT NULL,
    "t_doc" TEXT NOT NULL,
    "n_doc" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cuit" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compradores" (
    "id" SERIAL NOT NULL,
    "t_doc" TEXT NOT NULL,
    "n_doc" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "compradores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tickets_digitales_qr_key" ON "tickets_digitales"("qr");

-- CreateIndex
CREATE UNIQUE INDEX "asistentes_email_key" ON "asistentes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "asistentes_telefono_key" ON "asistentes"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "organizadores_email_key" ON "organizadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "organizadores_telefono_key" ON "organizadores"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "compradores_email_key" ON "compradores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "compradores_telefono_key" ON "compradores"("telefono");

-- AddForeignKey
ALTER TABLE "asistencias" ADD CONSTRAINT "asistencias_id_asistente_fkey" FOREIGN KEY ("id_asistente") REFERENCES "asistentes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "asistencias" ADD CONSTRAINT "asistencias_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_id_lugar_fkey" FOREIGN KEY ("id_lugar") REFERENCES "lugares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_id_organizador_fkey" FOREIGN KEY ("id_organizador") REFERENCES "organizadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entradas" ADD CONSTRAINT "entradas_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "eventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordenes" ADD CONSTRAINT "ordenes_id_comprador_fkey" FOREIGN KEY ("id_comprador") REFERENCES "compradores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets_digitales" ADD CONSTRAINT "tickets_digitales_id_comprador_cod_orden_fkey" FOREIGN KEY ("id_comprador", "cod_orden") REFERENCES "ordenes"("id_comprador", "cod") ON DELETE RESTRICT ON UPDATE CASCADE;
