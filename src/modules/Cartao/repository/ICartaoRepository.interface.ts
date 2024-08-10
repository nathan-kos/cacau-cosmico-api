import { IRepository } from '@shared/interfaces/Repository';
import { ICreateCartaoDTO } from '../DTO/ICreateCartaoDTO';
import { Cartao } from '../entitie/Cartao';

interface ICartaoRepository
  extends IRepository<Cartao, ICreateCartaoDTO, null> {}

export { ICartaoRepository };
