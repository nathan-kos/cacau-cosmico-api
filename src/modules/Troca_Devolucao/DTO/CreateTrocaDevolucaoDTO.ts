import { tde_Status } from '@prisma/client';

class CreateTrocaDevolucaoDTO {
  tde_cho_ped_id: string;

  tde_Troca: boolean;

  tde_Quantidade: number;

  tde_Status: tde_Status;
}

export { CreateTrocaDevolucaoDTO };
