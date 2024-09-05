import { TipoEndereco, UF } from '@prisma/client';

class ICreateEnderecoDTO {
  usu_Id: string;

  endereco: {
    end_Rua: string;
    end_Numero: string;
    end_Bairro: string;
    end_CEP: string;
    end_Complemento?: string | null;
    end_Cidade: string;
    end_Tipo: TipoEndereco;
    end_UF: UF;
    end_Cobranca: boolean;
    end_Entrega: boolean;
    end_Apelido: string;
  };
}

export { ICreateEnderecoDTO };
