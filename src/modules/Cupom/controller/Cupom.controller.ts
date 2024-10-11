import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByCodigoService } from '../service/FindByCodigo.service';
import { FindCupomByIdService } from '../service/FindById.service';

class CupomController {
  async findByCodigo(req: Request, res: Response) {
    const { codigo } = req.params;

    const findCupomByCodigo = container.resolve(FindByCodigoService);

    const cupom = await findCupomByCodigo.execute(codigo);

    return res.status(200).json(cupom);
  }

  async findById(req: Request, res: Response) {
    const { cup_Id } = req.params;

    const findCupomByIdService = container.resolve(FindCupomByIdService);

    const cupom = await findCupomByIdService.execute(cup_Id);

    return res.status(200).json(cupom);
  }
}

export { CupomController };
