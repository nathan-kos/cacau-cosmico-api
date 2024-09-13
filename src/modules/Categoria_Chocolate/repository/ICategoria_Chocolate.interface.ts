import { IBasicRepository } from '@shared/interfaces/BasicRepository';
import { Categoria_Chocolate } from '../entitie/Categoria_Chocolate';

interface ICategoriaChocolateRepository
  extends IBasicRepository<Categoria_Chocolate> {}

export { ICategoriaChocolateRepository };
