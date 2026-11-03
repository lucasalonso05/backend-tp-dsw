-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- Escrita a mano: el SQL automático borraba la columna "category" con los eventos ya cargados.
-- Las categorías que eran texto libre en cada evento pasan a ser filas de la tabla nueva.
-- Si dos eventos la escribieron distinto ("Musica" y "MUSICA"), queda una sola.
INSERT INTO "categories" ("name", "createdAt", "updatedAt")
SELECT DISTINCT ON (lower(btrim("category")))
       btrim("category"), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
FROM "events"
WHERE btrim("category") <> ''
ORDER BY lower(btrim("category")), btrim("category");

-- AlterTable: la FK entra opcional para poder llenarla con lo que ya hay.
ALTER TABLE "events" ADD COLUMN "id_category" INTEGER;

UPDATE "events" AS e
SET "id_category" = c."id"
FROM "categories" AS c
WHERE lower(btrim(e."category")) = lower(c."name");

-- Un evento que haya quedado sin categoría escrita va a una genérica: la columna pasa a obligatoria.
INSERT INTO "categories" ("name", "createdAt", "updatedAt")
SELECT 'Sin categoría', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
WHERE EXISTS (SELECT 1 FROM "events" WHERE "id_category" IS NULL);

UPDATE "events"
SET "id_category" = (SELECT "id" FROM "categories" WHERE "name" = 'Sin categoría')
WHERE "id_category" IS NULL;

-- Ya están todos los eventos apuntando a su categoría: el texto libre se va.
ALTER TABLE "events" ALTER COLUMN "id_category" SET NOT NULL;
ALTER TABLE "events" DROP COLUMN "category";

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
