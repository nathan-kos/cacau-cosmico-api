/*
  Warnings:

  - Added the required column `end_Apelido` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_Apelido` to the `cartao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Endereco" ADD COLUMN     "end_Apelido" TEXT NOT NULL,
ADD COLUMN     "end_Cobranca" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "end_Entrega" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "cartao" ADD COLUMN     "car_Apelido" TEXT NOT NULL;
