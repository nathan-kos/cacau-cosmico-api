import { CartaoRepository } from '@modules/Cartao/repository/CartaoRepository';
import { ICartaoRepository } from '@modules/Cartao/repository/ICartaoRepository.interface';
import { CartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository';
import { ICartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository.interface';
import { Categoria_ChocolateRepository } from '@modules/Categoria_Chocolate/repository/Categoria_ChocolateRepository';
import { ICategoriaChocolateRepository } from '@modules/Categoria_Chocolate/repository/ICategoria_Chocolate.interface';
import { ChocolateRepository } from '@modules/Chocolate/repository/ChocolateRepository';
import { IChocolateRepository } from '@modules/Chocolate/repository/IChocolateRepository.interface';
import { ChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolatePedidoRepository';
import { IChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolateRepository.interface';
import { CupomRepository } from '@modules/Cupom/repository/CupomRepository';
import { ICupomRepository } from '@modules/Cupom/repository/ICupomRepository.interface';
import { EnderecoRepository } from '@modules/Endereco/repository/EnderecoRepository';
import { IEnderecoRepository } from '@modules/Endereco/repository/IEnderecoRepository.interface';
import { PedidoRepository } from '@modules/Pedido/repository/PedidoRepository';
import { IPedidoRepository } from '@modules/Pedido/repository/PedidoRepository.interface';
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
  'CategoriaChocolateRepository',
  Categoria_ChocolateRepository,
);

container.registerSingleton<IChocolatePedidoRepository>(
  'ChocolatePedidoRepository',
  ChocolatePedidoRepository,
);

container.registerSingleton<IPedidoRepository>(
  'PedidoRepository',
  PedidoRepository,
);

container.registerSingleton<ICupomRepository>(
  'CupomRepository',
  CupomRepository,
);

container.registerSingleton<ICartaoPedidoRepository>(
  'CartaoPedidoRepository',
  CartaoPedidoRepository,
);

// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
