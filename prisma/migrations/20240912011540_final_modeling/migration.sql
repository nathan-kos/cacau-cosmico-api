/*
  Warnings:

  - You are about to drop the `cat_cho` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PAGAMENTO_REALIZADO', 'PAGAMENTO_REJEITADO', 'EM_TRANSPORTE', 'ENTREGUE', 'CANCELADO');

-- CreateEnum
CREATE TYPE "tde_Status" AS ENUM ('TROCA_SOLICITADA', 'TROCA_ACEITA', 'TROCA_RECUSADA', 'TROCA_REALIZADA', 'DEVOLUCAO_SOLICITADA', 'DEVOLUCAO_ACEITA', 'DEVOLUCAO_RECUSADA', 'DEVOLUCAO_REALIZADA');

-- DropForeignKey
ALTER TABLE "cat_cho" DROP CONSTRAINT "cat_cho_cch_cho_id_fkey";

-- DropTable
DROP TABLE "cat_cho";

-- CreateTable
CREATE TABLE "categoria_chocolate" (
    "cch_Id" TEXT NOT NULL,
    "cch_cho_id" TEXT NOT NULL,
    "cch_Categoria" "categoria" NOT NULL,
    "cch_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cch_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categoria_chocolate_pkey" PRIMARY KEY ("cch_Id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "ped_Id" TEXT NOT NULL,
    "ped_usu_id" TEXT NOT NULL,
    "ped_Status" "StatusPedido" NOT NULL,
    "ped_ValorTotal" DOUBLE PRECISION NOT NULL,
    "ped_Ativo" BOOLEAN NOT NULL DEFAULT true,
    "ped_end_id" TEXT NOT NULL,
    "ped_Frete" DOUBLE PRECISION NOT NULL,
    "ped_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ped_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("ped_Id")
);

-- CreateTable
CREATE TABLE "chocolate_pedido" (
    "chp_Id" TEXT NOT NULL,
    "chp_ped_id" TEXT NOT NULL,
    "chp_cho_id" TEXT NOT NULL,
    "chp_Quantidade" INTEGER NOT NULL,
    "chp_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chp_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chocolate_pedido_pkey" PRIMARY KEY ("chp_Id")
);

-- CreateTable
CREATE TABLE "cartao_pedido" (
    "cap_Id" TEXT NOT NULL,
    "cap_ped_id" TEXT NOT NULL,
    "cap_car_id" TEXT NOT NULL,
    "cap_Valor" DOUBLE PRECISION NOT NULL,
    "cap_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cap_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cartao_pedido_pkey" PRIMARY KEY ("cap_Id")
);

-- CreateTable
CREATE TABLE "Troca_Devolucao" (
    "tde_Id" TEXT NOT NULL,
    "tde_cho_ped_id" TEXT NOT NULL,
    "tde_Troca" BOOLEAN NOT NULL,
    "tde_Quantidade" INTEGER NOT NULL,
    "tde_Status" "tde_Status" NOT NULL,
    "tde_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tde_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Troca_Devolucao_pkey" PRIMARY KEY ("tde_Id")
);

-- CreateTable
CREATE TABLE "Cupom" (
    "cup_Id" TEXT NOT NULL,
    "cup_Codigo" TEXT NOT NULL,
    "cup_Valor" DOUBLE PRECISION NOT NULL,
    "cup_Ativo" BOOLEAN NOT NULL DEFAULT true,
    "cup_tde_id" TEXT NOT NULL,
    "cup_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cup_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cupom_pkey" PRIMARY KEY ("cup_Id")
);

-- CreateTable
CREATE TABLE "pedido_cupom" (
    "pcu_Id" TEXT NOT NULL,
    "pcu_ped_id" TEXT NOT NULL,
    "pcu_cup_id" TEXT NOT NULL,
    "pcu_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pcu_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pedido_cupom_pkey" PRIMARY KEY ("pcu_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cupom_cup_Codigo_key" ON "Cupom"("cup_Codigo");

-- AddForeignKey
ALTER TABLE "categoria_chocolate" ADD CONSTRAINT "categoria_chocolate_cch_cho_id_fkey" FOREIGN KEY ("cch_cho_id") REFERENCES "Chocolate"("cho_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_ped_usu_id_fkey" FOREIGN KEY ("ped_usu_id") REFERENCES "User"("usu_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_ped_end_id_fkey" FOREIGN KEY ("ped_end_id") REFERENCES "Endereco"("end_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chocolate_pedido" ADD CONSTRAINT "chocolate_pedido_chp_ped_id_fkey" FOREIGN KEY ("chp_ped_id") REFERENCES "Pedido"("ped_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chocolate_pedido" ADD CONSTRAINT "chocolate_pedido_chp_cho_id_fkey" FOREIGN KEY ("chp_cho_id") REFERENCES "Chocolate"("cho_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartao_pedido" ADD CONSTRAINT "cartao_pedido_cap_ped_id_fkey" FOREIGN KEY ("cap_ped_id") REFERENCES "Pedido"("ped_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartao_pedido" ADD CONSTRAINT "cartao_pedido_cap_car_id_fkey" FOREIGN KEY ("cap_car_id") REFERENCES "cartao"("car_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Troca_Devolucao" ADD CONSTRAINT "Troca_Devolucao_tde_cho_ped_id_fkey" FOREIGN KEY ("tde_cho_ped_id") REFERENCES "chocolate_pedido"("chp_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cupom" ADD CONSTRAINT "Cupom_cup_tde_id_fkey" FOREIGN KEY ("cup_tde_id") REFERENCES "Troca_Devolucao"("tde_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_cupom" ADD CONSTRAINT "pedido_cupom_pcu_ped_id_fkey" FOREIGN KEY ("pcu_ped_id") REFERENCES "Pedido"("ped_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_cupom" ADD CONSTRAINT "pedido_cupom_pcu_cup_id_fkey" FOREIGN KEY ("pcu_cup_id") REFERENCES "Cupom"("cup_Id") ON DELETE RESTRICT ON UPDATE CASCADE;
