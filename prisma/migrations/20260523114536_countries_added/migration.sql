/*
  Warnings:

  - Added the required column `name` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "icon" TEXT,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tariff" (
    "id" SERIAL NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "Tariff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tariff" ADD CONSTRAINT "Tariff_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
