import { Bandeira } from '@prisma/client';

class ICreateCartaoDTO {
  car_Nome: string;

  car_Numero: string;

  car_CVV: string;

  car_Validade: string;

  car_usu_id: string;

  car_Bandeira: Bandeira;
}

export { ICreateCartaoDTO };
