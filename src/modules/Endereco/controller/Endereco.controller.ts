import { TipoEndereco } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateEnderecoService } from '../service/CreateEndereco.service';
import { DeleteEnderecoService } from '../service/DeleteEndereco.service';
import { ListEnderecoService } from '../service/ListEndereco.service';
import { ShowEnderecoService } from '../service/ShowEndereco.service';
import { UpdateEnderecoService } from '../service/UpdateEndereco.service';

class EnderecoController {
  async create(req: Request, res: Response) {
    const {
      end_Rua,
      end_Numero,
      end_Bairro,
      end_CEP,
      end_Cidade,
      end_UF,
      end_Complemento,
      end_Tipo,
    } = req.body;

    const { usu_Id } = req.params;
    const createEndereco = container.resolve(CreateEnderecoService);

    const endereco = await createEndereco.execute({
      usu_Id,
      endereco: {
        end_Rua,
        end_Numero,
        end_Bairro,
        end_CEP,
        end_Cidade,
        end_UF,
        end_Complemento,
        end_Tipo,
      },
    });
    return res.status(201).json(endereco);
  }

  async update(req: Request, res: Response) {
    const {
      end_Rua,
      end_Numero,
      end_Bairro,
      end_CEP,
      end_Cidade,
      end_UF,
      end_Complemento,
      end_Tipo,
    } = req.body;
    const { usu_Id, end_Id } = req.params;
    const updateUser = container.resolve(UpdateEnderecoService);
    const user = await updateUser.execute({
      end_usu_id: usu_Id,
      end_Id,

      end_Rua,
      end_Numero,
      end_Bairro,
      end_CEP,
      end_Cidade,
      end_UF,
      end_Complemento,
      end_Tipo: end_Tipo as TipoEndereco,
    });

    return res.status(200).json(user);
  }

  async show(req: Request, res: Response) {
    const { usu_Id, end_Id } = req.params;

    const findEndereco = container.resolve(ShowEnderecoService);

    const endereco = await findEndereco.execute(usu_Id, end_Id);

    return res.status(200).json(endereco);
  }

  async delete(req: Request, res: Response) {
    const { usu_Id, end_Id } = req.params;

    const deleteService = container.resolve(DeleteEnderecoService);

    await deleteService.execute(usu_Id, end_Id);

    return res.status(204).send();
  }

  async list(req: Request, res: Response) {
    const { usu_Id } = req.params;

    const { page, limit } = req.query;

    const listService = container.resolve(ListEnderecoService);

    const enderecos = await listService.execute({
      page: Number(page),
      limit: Number(limit),
      filter: { end_usu_id: usu_Id },
    });

    return res.status(200).json(enderecos);
  }
}

export { EnderecoController };
