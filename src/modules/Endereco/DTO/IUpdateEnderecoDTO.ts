import { TipoEndereco, UF } from '@prisma/client';

class IUpdateEnderecoDTO {
  end_Id: string;

  end_Rua: string;

  end_Numero: string;

  end_Bairro: string;

  end_CEP: string;

  end_Complemento?: string;

  end_usu_id: string;

  end_Tipo: TipoEndereco;

  end_UF: UF;

  end_Cidade: string;

  end_Apelido: string;

  end_Entrega: boolean;

  end_Cobranca: boolean;
}

export { IUpdateEnderecoDTO };
