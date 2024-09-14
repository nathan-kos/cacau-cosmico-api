-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "categoria" ADD VALUE 'CARAMELO';
ALTER TYPE "categoria" ADD VALUE 'CROCANTE';
ALTER TYPE "categoria" ADD VALUE 'MENTA';
ALTER TYPE "categoria" ADD VALUE 'AVELA';
ALTER TYPE "categoria" ADD VALUE 'COCO';
ALTER TYPE "categoria" ADD VALUE 'FRUTAS_VERMELHAS';
