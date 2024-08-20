import { IRepository } from '@shared/interfaces/Repository';
import { ICreateEnderecoDTO } from '../DTO/ICreateEnderecoDTO';
import { IUpdateEnderecoDTO } from '../DTO/IUpdateEnderecoDTO';
import { Endereco } from '../entitie/Endereco';

interface IEnderecoRepository
  extends IRepository<Endereco, ICreateEnderecoDTO, IUpdateEnderecoDTO> {}

export { IEnderecoRepository };
