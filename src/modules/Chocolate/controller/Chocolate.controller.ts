import { categoria } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByIdService } from '../service/FindById.service';
import { ListAllAtivosService } from '../service/ListAllAtivos.service';
import { ListByCategoriaService } from '../service/ListByCategoria.service';
import { ListAllNameService } from '../service/ListByName.service';

class ChocolateController {
  async findChocolateById(req: Request, res: Response) {
    const { cho_Id } = req.params;

    const findChocolateById = container.resolve(FindByIdService);

    const chocolate = await findChocolateById.execute(cho_Id);

    return res.status(200).json(chocolate);
  }

  async listAllAtivos(req: Request, res: Response) {
    const { page, limit } = req.query;

    const listAllAtivos = container.resolve(ListAllAtivosService);

    const chocolates = await listAllAtivos.execute({
      page: Number(page),
      limit: Number(limit),
    });

    return res.status(200).json(chocolates);
  }

  async listAllByCategoria(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { cat } = req.params;

    const listByCategoria = container.resolve(ListByCategoriaService);

    const chocolates = await listByCategoria.execute(
      Number(page),
      Number(limit),
      cat as categoria,
    );

    return res.status(200).json(chocolates);
  }

  async listAllByName(req: Request, res: Response) {
    const { page, limit } = req.query;
    const { cho_Nome } = req.params;

    const listAllByName = container.resolve(ListAllNameService);

    const chocolates = await listAllByName.execute({
      page: Number(page),
      limit: Number(limit),
      filter: {
        cho_Nome,
      },
    });

    return res.status(200).json(chocolates);
  }
}

export { ChocolateController };
