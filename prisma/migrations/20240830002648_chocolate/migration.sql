-- CreateEnum
CREATE TYPE "categoria" AS ENUM ('BARRA', 'BOMBOM', 'TRUFA', 'CAIXA', 'BRANCO', 'AMARGO', 'AO_LEITE', 'AMENDOIM', 'NOZES', 'CONFETE', 'LICOR', 'CONFEITADO', 'RECHEADO', 'SEM_ACUCAR', 'SEM_LACTOSE', 'OUTROS');

-- CreateTable
CREATE TABLE "Chocolate" (
    "cho_Id" TEXT NOT NULL,
    "cho_Nome" TEXT NOT NULL,
    "cho_Descricao" TEXT NOT NULL,
    "cho_Valor" DOUBLE PRECISION NOT NULL,
    "cho_Imagem" TEXT NOT NULL,
    "cho_Ativo" BOOLEAN NOT NULL DEFAULT true,
    "cho_Peso" DOUBLE PRECISION NOT NULL,
    "cho_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cho_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chocolate_pkey" PRIMARY KEY ("cho_Id")
);

-- CreateTable
CREATE TABLE "cat_cho" (
    "cch_Id" TEXT NOT NULL,
    "cch_cho_id" TEXT NOT NULL,
    "cch_Categoria" "categoria" NOT NULL,
    "cch_CriadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cch_AtualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cat_cho_pkey" PRIMARY KEY ("cch_Id")
);

-- AddForeignKey
ALTER TABLE "cat_cho" ADD CONSTRAINT "cat_cho_cch_cho_id_fkey" FOREIGN KEY ("cch_cho_id") REFERENCES "Chocolate"("cho_Id") ON DELETE RESTRICT ON UPDATE CASCADE;
