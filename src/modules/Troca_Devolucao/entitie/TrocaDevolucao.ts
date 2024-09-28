import { tde_Status } from '@prisma/client';

class TrocaDevolucao {
  tde_Id: string;

  tde_cho_ped_id: string;

  tde_Troca: boolean;

  tde_Quantidade: number;

  tde_Status: tde_Status;

  tde_CriadoEm: Date;

  tde_AtualizadoEm: Date;
}

export { TrocaDevolucao };
