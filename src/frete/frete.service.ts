import { AtualizarFreteRequest } from './dtos/atualizar-frete-request';
import { FreteNaoEncontrado } from './../erros/frete-nao-encontrado';
import { CriarFreteRequest } from './dtos/criar-frete-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Frete } from './frete.entity';
import { CriarFreteResponse } from './dtos/criar-frete-response';
import { RecuperarFreteResponse } from './dtos/recuperar-frete-response';

@Injectable()
export class FreteService {
  @InjectRepository(Frete)
  private readonly freteRepo: Repository<Frete>;

  async inserir(request: CriarFreteRequest): Promise<CriarFreteResponse> {
    let frete = new Frete();
    frete.codigo = request.codigo;
    frete.telefoneEmpresa = request.telefoneEmpresa;
    frete.nomeEmpresa = request.nomeEmpresa;
    frete.origemEstado = request.origemEstado;
    frete.origemCidade = request.origemCidade;
    frete.destinoEstado = request.destinoEstado;
    frete.destinoCidade = request.destinoCidade;
    frete.categoriaVeiculo = request.categoriaVeiculo;
    frete.eixosVeiculo = request.eixosVeiculo;
    frete.categoriaCarreta = request.categoriaCarreta;
    frete.eixosCarreta = request.eixosVeiculo;
    frete.peso = request.peso;
    frete.quantidade = request.quantidade;
    frete.produto = request.produto;
    frete.tipoCarga = request.tipoCarga;
    frete.tipoPagamento = request.tipoPagamento;
    frete.observacao = request.observacao;
    frete.validade = request.validade;

    frete = await this.freteRepo.save(frete);

    return { id: frete.id };
  }

  async recuperar(id: number): Promise<RecuperarFreteResponse> {
    const frete = await this.freteRepo.findOne(id);

    return {
      codigo: frete.codigo,
      telefoneEmpresa: frete.telefoneEmpresa,
      nomeEmpresa: frete.nomeEmpresa,
      origemEstado: frete.origemEstado,
      origemCidade: frete.origemCidade,
      destinoEstado: frete.destinoEstado,
      destinoCidade: frete.destinoCidade,
      categoriaVeiculo: frete.categoriaVeiculo,
      eixosVeiculo: frete.eixosVeiculo,
      categoriaCarreta: frete.categoriaCarreta,
      eixosCarreta: frete.eixosVeiculo,
      peso: frete.peso,
      quantidade: frete.quantidade,
      produto: frete.produto,
      tipoCarga: frete.tipoCarga,
      tipoPagamento: frete.tipoPagamento,
      observacao: frete.observacao,
      validade: frete.validade,
    };
  }

  async atualizar(id: number, info: AtualizarFreteRequest): Promise<void> {
    const frete = await this.freteRepo.findOne(id);
    if (!frete) {
      throw new FreteNaoEncontrado(id);
    }

    frete.codigo = info.codigo ?? frete.codigo;
    frete.telefoneEmpresa = info.telefoneEmpresa ?? frete.telefoneEmpresa;
    frete.nomeEmpresa = info.nomeEmpresa ?? frete.nomeEmpresa;
    frete.origemEstado = info.origemEstado ?? frete.origemEstado;
    frete.origemCidade = info.origemCidade ?? frete.origemCidade;
    frete.destinoEstado = info.destinoEstado ?? frete.destinoEstado;
    frete.destinoCidade = info.destinoCidade ?? frete.destinoCidade;
    frete.categoriaVeiculo = info.categoriaVeiculo ?? frete.categoriaVeiculo;
    frete.eixosVeiculo = info.eixosVeiculo ?? frete.eixosVeiculo;
    frete.categoriaCarreta = info.categoriaCarreta ?? frete.categoriaCarreta;
    frete.eixosCarreta = info.eixosCarreta ?? frete.eixosCarreta;
    frete.peso = info.peso ?? frete.peso;
    frete.quantidade = info.quantidade ?? frete.quantidade;
    frete.produto = info.produto ?? frete.produto;
    frete.tipoCarga = info.tipoCarga ?? frete.tipoCarga;
    frete.tipoPagamento = info.tipoPagamento ?? frete.tipoPagamento;
    frete.observacao = info.observacao ?? frete.observacao;

    await this.freteRepo.update(id, frete);
  }

  async desativar(id: number): Promise<void> {
    const frete = await this.freteRepo.findOne(id);
    if (!frete) {
      throw new FreteNaoEncontrado(id);
    }

    frete.isAtivo = false;

    await this.freteRepo.update(id, frete);
  }
}
