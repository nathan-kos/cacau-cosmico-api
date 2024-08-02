import { CidadeRepository } from '@modules/Cidade/repository/CidadeRepository';
import { ICidadeRepository } from '@modules/Cidade/repository/ICidadeRepository.interface';
import { EstadoRepository } from '@modules/Estado/repository/EstadoRepository';
import { IEstadoRepository } from '@modules/Estado/repository/IEstadoRepository.interface';
import { IPapelRepository } from '@modules/Papel/repository/IPapelRepository.interface';
import { PapelRepository } from '@modules/Papel/repository/PapelRepository';
import { ITermoPrivacidadeRepository } from '@modules/Termos-Privacidade/Repository/ITermoPrivacidade.repository';
import { TermoPrivacidadeRepository } from '@modules/Termos-Privacidade/Repository/TermoPrivacidadeRepositort';
import { UserRepository } from '@modules/User/repository/UserRepository';
import { IUserRepository } from '@modules/User/repository/UserRepository.interface';
import { container } from 'tsyringe';
import { HashProvider } from './providers/hashProvider/implementation/HashProvider';
import { IHashProvider } from './providers/hashProvider/model/IHashProvider';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IPapelRepository>(
  'PapelRepository',
  PapelRepository,
);

container.registerSingleton<IEstadoRepository>(
  'EstadoRepository',
  EstadoRepository,
);

container.registerSingleton<ICidadeRepository>(
  'CidadeRepository',
  CidadeRepository,
);

container.registerSingleton<ITermoPrivacidadeRepository>(
  'TermoPrivacidadeRepository',
  TermoPrivacidadeRepository,
);
// utils
container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
