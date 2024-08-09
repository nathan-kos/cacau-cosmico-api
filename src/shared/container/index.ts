import { CidadeRepository } from '@modules/Cidade/repository/CidadeRepository';
import { ICidadeRepository } from '@modules/Cidade/repository/ICidadeRepository.interface';
import { EstadoRepository } from '@modules/Estado/repository/EstadoRepository';
import { IEstadoRepository } from '@modules/Estado/repository/IEstadoRepository.interface';
import { UserRepository } from '@modules/User/repository/UserRepository';
import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { container } from 'tsyringe';
import { HashProvider } from './providers/hashProvider/implementation/HashProvider';
import { IHashProvider } from './providers/hashProvider/model/IHashProvider';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IEstadoRepository>(
  'EstadoRepository',
  EstadoRepository,
);

container.registerSingleton<ICidadeRepository>(
  'CidadeRepository',
  CidadeRepository,
);

// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
