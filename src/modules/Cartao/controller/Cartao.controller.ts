import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCartaoService } from '../service/CreateCartao.service';
import { DeleteCartaoService } from '../service/DeleteCartao.service';
import { FindCartaoByIdService } from '../service/FindCartaoById.service';
import { ListCartaoService } from '../service/ListCartao.service';

class CartaoController {
  async create(req: Request, res: Response) {
    const { usu_Id } = req.params;
    const {
      car_Nome,
      car_Numero,
      car_CVV,
      car_Validade,
      car_Bandeira,
      car_Apelido,
    } = req.body;

    const createCartao = container.resolve(CreateCartaoService);

    const cartao = await createCartao.execute({
      car_Nome,
      car_Numero,
      car_CVV,
      car_Validade,
      car_usu_id: usu_Id,
      car_Bandeira,
      car_Apelido,
    });

    return res.status(201).json(cartao);
  }

  async findById(req: Request, res: Response) {
    const { usu_Id, car_Id } = req.params;

    const findById = container.resolve(FindCartaoByIdService);

    const cartao = await findById.execute(usu_Id, car_Id);

    return res.status(200).json(cartao);
  }

  async delete(req: Request, res: Response) {
    const { usu_Id, car_Id } = req.params;

    const deleteCartao = container.resolve(DeleteCartaoService);

    await deleteCartao.execute(usu_Id, car_Id);

    return res.status(204).send();
  }

  async list(req: Request, res: Response) {
    const { usu_Id } = req.params;

    const { page, limit } = req.query;

    const listCartao = container.resolve(ListCartaoService);

    const cartao = await listCartao.execute({
      filter: { car_usu_id: usu_Id },
      page: Number(page),
      limit: Number(limit),
    });

    return res.status(200).json(cartao);
  }
}

export { CartaoController };
