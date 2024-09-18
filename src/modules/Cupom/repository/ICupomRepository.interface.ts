import { IRepository } from '@shared/interfaces/Repository';
import { ICreateCupomDTO } from '../DTO/ICreateCupomDTO';
import { Cupom } from '../entitie/Cupom';

interface ICupomRepository extends IRepository<Cupom, ICreateCupomDTO, null> {}

export { ICupomRepository };
