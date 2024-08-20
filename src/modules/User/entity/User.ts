import { $Enums, User as IUser } from '@prisma/client';

class User implements IUser {
  usu_Id: string;

  usu_Nome: string;

  usu_Email: string;

  usu_Senha: string;

  usu_Telefone: string;

  usu_CPF: string;

  usu_Nasc: Date;

  usu_Ativo: boolean;

  usu_pap: $Enums.Papel;

  usu_Genero: $Enums.Genero;

  usu_CriadoEm: Date;

  usu_AtualizadoEm: Date;
}

export { User };
