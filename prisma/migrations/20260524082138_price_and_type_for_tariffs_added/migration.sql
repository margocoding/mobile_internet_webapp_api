/*
  Warnings:

  - Added the required column `price` to the `Tariff` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Tariff` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TariffType" AS ENUM ('UNLIMITED', 'FIXED');

-- AlterTable
ALTER TABLE "Tariff" ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "type" "TariffType" NOT NULL;
