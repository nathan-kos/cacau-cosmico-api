import { Bandeira } from '@prisma/client';

class Cartao {
  car_Id: string;

  car_Nome: string;

  car_Numero: string;

  car_CVV: string;

  car_Validade: string;

  car_usu_id: string;

  car_Bandeira: Bandeira;

  car_Ativo: boolean;

  car_Apelido: string;

  car_CriadoEm: Date;

  car_AtualizadoEm?: Date;
}

export { Cartao };
