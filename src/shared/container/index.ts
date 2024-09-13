import { CartaoRepository } from '@modules/Cartao/repository/CartaoRepository';
import { ICartaoRepository } from '@modules/Cartao/repository/ICartaoRepository.interface';
import { Categoria_ChocolateRepository } from '@modules/Categoria_Chocolate/repository/Categoria_ChocolateRepository';
import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { ChocolateRepository } from '@modules/Chocolate/repository/ChocolateRepository';
import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
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

container.registerSingleton<IChocolateRepository>(
  'ChocolateRepository',
  ChocolateRepository,
);

container.registerSingleton<ICategoriaChocolateRepository>(
  'ICategoriaChocolateRepository',
  Categoria_ChocolateRepository,
);

// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
