import { StatusPedido } from '@prisma/client';

class createWithDate {
  ped_usu_id: string;

  ped_Status: StatusPedido;

  ped_ValorTotal: number;

  ped_end_id: string;

  ped_Frete: number;

  ped_CriadoEm: string;
}

export { createWithDate };
