-- CreateEnum
CREATE TYPE "Papel" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('MASCULINO', 'FEMININO', 'OUTROS');

-- CreateEnum
CREATE TYPE "Bandeira" AS ENUM ('VISA', 'MASTERCARD', 'ELO', 'AMERICANEXPRESS', 'HIPERCARD');

-- CreateEnum
CREATE TYPE "TipoEndereco" AS ENUM ('RESIDENCIAL', 'COMERCIAL', 'ENTREGA', 'COBRANCA');

-- CreateTable
CREATE TABLE "User" (
    "usu_Id" TEXT NOT NULL,
    "usu_Nome" TEXT NOT NULL,
    "usu_Email" TEXT NOT NULL,
    "usu_Senha" TEXT NOT NULL,
    "usu_Telefone" CHAR(16) NOT NULL,
    "usu_CPF" CHAR(11) NOT NULL,
    "usu_Nasc" DATE NOT NULL,
    "usu_pap" "Papel" NOT NULL DEFAULT 'USER',
    "usu_Ativo" BOOLEAN NOT NULL DEFAULT true,
    "usu_Genero" "Genero" NOT NULL,
    "usu_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usu_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("usu_Id")
);

-- CreateTable
CREATE TABLE "Estado" (
    "est_Id" TEXT NOT NULL,
    "est_Nome" TEXT NOT NULL,
    "est_UF" CHAR(2) NOT NULL,
    "est_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "est_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("est_Id")
);

-- CreateTable
CREATE TABLE "Cidade" (
    "cid_Id" TEXT NOT NULL,
    "cid_Nome" TEXT NOT NULL,
    "cid_est_id" TEXT NOT NULL,
    "cid_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cid_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cidade_pkey" PRIMARY KEY ("cid_Id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "end_Id" TEXT NOT NULL,
    "end_Rua" TEXT NOT NULL,
    "end_Numero" TEXT NOT NULL,
    "end_Bairro" TEXT NOT NULL,
    "end_CEP" CHAR(9) NOT NULL,
    "end_Complemento" TEXT,
    "end_cid_id" TEXT NOT NULL,
    "end_Tipo" "TipoEndereco" NOT NULL,
    "end_usu_id" TEXT NOT NULL,
    "end_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("end_Id")
);

-- CreateTable
CREATE TABLE "cartao" (
    "car_Id" TEXT NOT NULL,
    "car_Nome" TEXT NOT NULL,
    "car_Numero" TEXT NOT NULL,
    "car_Validade" TEXT NOT NULL,
    "car_CVV" TEXT NOT NULL,
    "car_usu_id" TEXT NOT NULL,
    "car_Bandeira" "Bandeira" NOT NULL,
    "car_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "car_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("car_Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_usu_Email_key" ON "User"("usu_Email");

-- CreateIndex
CREATE UNIQUE INDEX "User_usu_CPF_key" ON "User"("usu_CPF");

-- AddForeignKey
ALTER TABLE "Cidade" ADD CONSTRAINT "Cidade_cid_est_id_fkey" FOREIGN KEY ("cid_est_id") REFERENCES "Estado"("est_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_end_cid_id_fkey" FOREIGN KEY ("end_cid_id") REFERENCES "Cidade"("cid_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_end_usu_id_fkey" FOREIGN KEY ("end_usu_id") REFERENCES "User"("usu_Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartao" ADD CONSTRAINT "cartao_car_usu_id_fkey" FOREIGN KEY ("car_usu_id") REFERENCES "User"("usu_Id") ON DELETE RESTRICT ON UPDATE CASCADE;
