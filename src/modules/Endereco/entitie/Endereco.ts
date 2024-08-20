import { TipoEndereco, UF } from '@prisma/client';

class Endereco {
  end_Id: string;

  end_Rua: string;

  end_Numero: string;

  end_Bairro: string;

  end_CEP: string;

  end_Complemento?: string | null;

  end_Cidade: string;

  end_Tipo: TipoEndereco;

  end_UF: UF;

  end_usu_id: string;

  end_Ativo: boolean;

  end_CriadoEm: Date;

  end_AtualizadoEm?: Date;
}

export { Endereco };
