import { CartaoRepository } from '@modules/Cartao/repository/CartaoRepository';
import { ICartaoRepository } from '@modules/Cartao/repository/ICartaoRepository.interface';
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

container.registerSingleton<ICartaoRepository>(
  'CartaoRepository',
  CartaoRepository,
);

// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
