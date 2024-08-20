/*
  Warnings:

  - You are about to drop the column `end_cid_id` on the `Endereco` table. All the data in the column will be lost.
  - You are about to drop the `Cidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estado` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `end_Cidade` to the `Endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_UF` to the `Endereco` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UF" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- DropForeignKey
ALTER TABLE "Cidade" DROP CONSTRAINT "Cidade_cid_est_id_fkey";

-- DropForeignKey
ALTER TABLE "Endereco" DROP CONSTRAINT "Endereco_end_cid_id_fkey";

-- AlterTable
ALTER TABLE "Endereco" DROP COLUMN "end_cid_id",
ADD COLUMN     "end_Cidade" TEXT NOT NULL,
ADD COLUMN     "end_UF" "UF" NOT NULL;

-- DropTable
DROP TABLE "Cidade";

-- DropTable
DROP TABLE "Estado";
