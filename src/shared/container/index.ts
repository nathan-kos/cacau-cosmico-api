import { EnderecoRepository } from '@modules/Endereco/repository/EnderecoRepository';
import { IEnderecoRepository } from '@modules/Endereco/repository/IEnderecoRepository.interface';
import { UserRepository } from '@modules/User/repository/UserRepository';
import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { container } from 'tsyringe';
import { HashProvider } from './providers/hashProvider/implementation/HashProvider';
import { IHashProvider } from './providers/hashProvider/model/IHashProvider';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IEnderecoRepository>(
  'EnderecoRepository',
  EnderecoRepository,
);

// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
