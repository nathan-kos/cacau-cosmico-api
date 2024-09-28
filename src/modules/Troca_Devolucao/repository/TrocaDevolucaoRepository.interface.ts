import { IRepository } from '@shared/interfaces/Repository';
import { CreateTrocaDevolucaoDTO } from '../DTO/CreateTrocaDevolucaoDTO';
import { UpdateTrocaDevolucaoDTO } from '../DTO/UpdateTrocaDevolucaoDTO';
import { TrocaDevolucao } from '../entitie/TrocaDevolucao';

interface ITrocaDevolucaoRepository
  extends IRepository<
    TrocaDevolucao,
    CreateTrocaDevolucaoDTO,
    UpdateTrocaDevolucaoDTO
  > {}

export { ITrocaDevolucaoRepository };
