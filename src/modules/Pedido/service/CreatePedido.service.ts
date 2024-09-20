import { Cartao } from '@modules/Cartao/entitie/Cartao';
import { CartaoRepository } from '@modules/Cartao/repository/CartaoRepository';
import { CartaoPedidoRepository } from '@modules/Cartao_Pedido/repository/CartaoPedidoRepository';
import { Chocolate } from '@modules/Chocolate/entitie/chocolate';
import { ChocolateRepository } from '@modules/Chocolate/repository/ChocolateRepository';
import { ChocolatePedidoRepository } from '@modules/Chocolate_Pedido/repository/ChocolatePedidoRepository';
import { Cupom } from '@modules/Cupom/entitie/Cupom';
import { CupomRepository } from '@modules/Cupom/repository/CupomRepository';
import { EnderecoRepository } from '@modules/Endereco/repository/EnderecoRepository';
import { UserRepository } from '@modules/User/repository/UserRepository';
import { StatusPedido } from '@prisma/client';
import { BadRequestError } from '@shared/errors/BadRequestError';
import { EntityNotFoundError } from '@shared/errors/EntityNotFoundError';
import { inject } from 'tsyringe';
import { Pedido } from '../entitie/Pedido';
import { PedidoRepository } from '../repository/PedidoRepository';

class CreatePedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: PedidoRepository,

    @inject('ChocolateRepository')
    private chocolateRepository: ChocolateRepository,

    @inject('UserRepository')
    private userRepository: UserRepository,

    @inject('ChocolatePedidoRepository')
    private chocolatePedidoRepository: ChocolatePedidoRepository,

    @inject('CartaoPedidoRepository')
    private cartaoPedidoRepository: CartaoPedidoRepository,

    @inject('CartaoRepository')
    private cartaoRepository: CartaoRepository,

    @inject('EnderecoRepository')
    private enderecoRepository: EnderecoRepository,

    @inject('CupomRepository')
    private cupomRepository: CupomRepository,
  ) {}

  async execute({
    usu_Id,
    end_Id,
    chocolates,
    frete,
    cartoes,
    cupons,
  }: {
    usu_Id: string;
    end_Id: string;
    chocolates: {
      cho_Id: string;
      quantidade: number;
    }[];
    frete: number;
    cartoes: {
      car_Id: string;
      car_Valor: number;
    }[];
    cupons: string[];
  }): Promise<Pedido> {
    const user = await this.userRepository.findBy({ usu_Id });

    if (!user) {
      throw new EntityNotFoundError('Usuario não encontrado');
    }

    const endereco = await this.enderecoRepository.findBy({ end_Id });

    if (!endereco || endereco.end_usu_id !== usu_Id) {
      throw new EntityNotFoundError('Endereço não encontrado');
    }

    const chocolatesFind: Chocolate[] = [];
    const cartoesFind: Cartao[] = [];
    const cuponsFind: Cupom[] = [];

    // Agrupar todas as Promises em uma única chamada de Promise.all
    await Promise.all([
      ...chocolates.map(async (chocolate) => {
        const chocolateFind = await this.chocolateRepository.findBy({
          cho_Id: chocolate.cho_Id,
        });

        if (!chocolateFind) {
          throw new EntityNotFoundError('Chocolate não encontrado');
        }

        chocolatesFind.push(chocolateFind);
      }),
      ...cartoes.map(async (cartao) => {
        const cartaoFind = await this.cartaoRepository.findBy({
          car_Id: cartao.car_Id,
        });

        if (!cartaoFind) {
          throw new EntityNotFoundError('Cartão não encontrado');
        }

        cartoesFind.push(cartaoFind);
      }),
      ...cupons.map(async (cupom) => {
        const cupomFind = await this.cupomRepository.findBy({ cup_Id: cupom });

        if (!cupomFind) {
          throw new EntityNotFoundError('Cupom não encontrado');
        }

        cuponsFind.push(cupomFind);
      }),
    ]);

    // total é a soma dos chocolates + frete - cupons
    const totalChocolates = chocolates.reduce((acc, chocolate) => {
      const chocolateFinded = chocolatesFind.find(
        (chocolateItem) => chocolateItem.cho_Id === chocolate.cho_Id,
      );

      if (!chocolateFinded) {
        throw new EntityNotFoundError('Chocolate não encontrado');
      }

      return acc + chocolateFinded.cho_Valor * chocolate.quantidade;
    }, 0);

    const totalFrete = totalChocolates + frete;

    const totalCupons = cuponsFind.reduce((acc, cupom) => {
      return acc + cupom.cup_Valor;
    }, 0);

    let total = totalFrete - totalCupons;

    if (total < 0) {
      total = 0;
    }

    // passa cartoes e verifica se algum valor é menor que 10
    let totalCartoes = 0;
    cartoes.forEach((cartao) => {
      if (cartao.car_Valor < 10) {
        throw new BadRequestError('Valor do cartão não pode ser menor que 10');
      }

      totalCartoes += cartao.car_Valor;
    });

    if (totalCartoes !== total) {
      throw new BadRequestError('Valor total do pedido não confere');
    }

    // finalmente cria o pedido
    const pedido = await this.pedidoRepository.create({
      ped_end_id: endereco.end_Id,
      ped_usu_id: usu_Id,
      ped_Frete: frete,
      ped_Status: StatusPedido.PAGAMENTO_REALIZADO,
      ped_ValorTotal: total,
    });

    if (!pedido) {
      throw new BadRequestError('Erro ao criar pedido');
    }

    await Promise.all([
      ...chocolates.map(async (chocolate) => {
        const chocolateFinded = chocolatesFind.find(
          (chocolateItem) => chocolateItem.cho_Id === chocolate.cho_Id,
        );

        if (!chocolateFinded) {
          throw new EntityNotFoundError('Chocolate não encontrado');
        }

        await this.chocolatePedidoRepository.create({
          chp_cho_id: chocolateFinded.cho_Id,
          chp_ped_id: pedido.ped_Id,
          chp_Quantidade: chocolate.quantidade,
        });
      }),
      ...cartoes.map(async (cartao) => {
        const cartaoFinded = cartoesFind.find(
          (cartaoItem) => cartaoItem.car_Id === cartao.car_Id,
        );

        if (!cartaoFinded) {
          throw new EntityNotFoundError('Cartão não encontrado');
        }

        await this.cartaoPedidoRepository.create({
          cap_car_id: cartaoFinded.car_Id,
          cap_ped_id: pedido.ped_Id,
          cap_Valor: cartao.car_Valor,
        });
      }),
    ]);

    return pedido;
  }
}

export { CreatePedidoService };
