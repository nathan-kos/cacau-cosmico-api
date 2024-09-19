import { StatusPedido } from '@prisma/client';

class Pedido {
  ped_Id: string;

  ped_usu_id: string;

  ped_Status: StatusPedido;

  ped_ValorTotal: number;

  ped_end_id: string;

  ped_Frete: number;

  ped_CriadoEm: Date;

  ped_AtualizadoEm: Date;
}

export { Pedido };
