import { StatusPedido } from '@prisma/client';

class UpdatePedidoDTO {
  ped_Id: string;

  ped_Status: StatusPedido;
}

export { UpdatePedidoDTO };
