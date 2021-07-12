import { CriarImplementoRequest } from './dtos/criar-implemento-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Implemento } from './implemento.entity';
import { CriarImplementoResponse } from './dtos/criar-implemento-response';
import { RecuperarImplementoResponse } from './dtos/recuperar-implemento-response';
import { AtualizarImplementoRequest } from './dtos/atualizar-implemento-request';
import { ImplementoNaoEncontrado } from '../erros/implemento-nao-encontrado';
import { Categoria } from './categoria.enum';

@Injectable()
export class ImplementoService {
  @InjectRepository(Implemento)
  private readonly implementoRepo: Repository<Implemento>;

  async inserir(
    request: CriarImplementoRequest,
  ): Promise<CriarImplementoResponse> {
    let implemento = new Implemento();
    implemento.categoria = request.categoria;
    implemento.marca = request.marca;
    implemento.modelo = request.modelo;
    implemento.cor = request.cor;
    implemento.ano = request.ano;
    implemento.eixos = request.eixos;

    implemento = await this.implementoRepo.save(implemento);

    return { id: implemento.id };
  }

  async recuperar(id: number): Promise<RecuperarImplementoResponse> {
    const implemento = await this.implementoRepo.findOne(id);

    return {
      categoria: implemento.categoria,
      marca: implemento.marca,
      modelo: implemento.modelo,
      ano: implemento.ano,
      cor: implemento.cor,
      capacidade: implemento.capacidade,
      eixos: implemento.eixos,
    };
  }

  async atualizar(id: number, info: AtualizarImplementoRequest): Promise<void> {
    const implemento = await this.implementoRepo.findOne(id);
    if (!implemento) {
      throw new ImplementoNaoEncontrado(id);
    }

    implemento.marca = info.marca ?? implemento.marca;
    implemento.modelo = info.modelo ?? implemento.modelo;
    implemento.ano = info.ano ?? implemento.ano;
    implemento.cor = info.cor ?? implemento.cor;
    implemento.capacidade = info.capacidade ?? implemento.capacidade;
    implemento.eixos = info.eixos ?? implemento.eixos;
    //implemento.categoria = info.categoria ?? implemento.categoria;
    await this.implementoRepo.update(id, implemento);
  }

  async desativar(id: number): Promise<void> {
    const implemento = await this.implementoRepo.findOne(id);
    if (!implemento) {
      throw new ImplementoNaoEncontrado(id);
    }

    implemento.isAtivo = false;

    await this.implementoRepo.update(id, implemento);
  }
}
