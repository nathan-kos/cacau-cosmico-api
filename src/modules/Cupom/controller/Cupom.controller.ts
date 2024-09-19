import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByCodigoService } from '../service/FindByCodigo.service';

class CupomController {
  //   async create(req: Request, res: Response) {
  //     return res.status(201).json({ message: 'create' });
  //   }

  async findByCodigo(req: Request, res: Response) {
    const { codigo } = req.params;

    const findCupomByCodigo = container.resolve(FindByCodigoService);

    const cupom = await findCupomByCodigo.execute(codigo);

    return res.status(200).json(cupom);
  }
}

export { CupomController };
