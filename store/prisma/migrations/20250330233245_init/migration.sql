/*
  Warnings:

  - You are about to drop the `Instrument` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Instrument";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
