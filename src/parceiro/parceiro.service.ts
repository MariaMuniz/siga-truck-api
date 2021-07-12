import { CriarParceiroRequest } from './dtos/criar-parceiro-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parceiro } from './parceiro.entity';
import { CriarParceiroResponse } from './dtos/criar-parceiro-response';
import { RecuperarParceiroResponse } from './dtos/recuperar-parceiro-response';
import { ParceiroNaoEncontrado } from '../erros/parceiro-nao-encontrado';
import { AtualizarParceiroRequest } from './dtos/atualizar-parceiro-request';

@Injectable()
export class ParceiroService {
  @InjectRepository(Parceiro)
  private readonly parceiroRepo: Repository<Parceiro>;

  async inserir(request: CriarParceiroRequest): Promise<CriarParceiroResponse> {
    let parceiro = new Parceiro();

    parceiro.nome = request.nome;
    parceiro.senha = request.senha;
    parceiro.logo = request.logo;
    parceiro.email = request.email;
    parceiro.telefone = request.telefone;
    parceiro.horario = request.horario;
    parceiro.validade = request.validade;
    parceiro.promocao = request.promocao;

    parceiro = await this.parceiroRepo.save(parceiro);

    return { id: parceiro.id };
  }
  async recuperar(id: number): Promise<RecuperarParceiroResponse> {
    const parceiro = await this.parceiroRepo.findOne(id);

    return {
      nome: parceiro.nome,
      senha: parceiro.senha,
      logo: parceiro.logo,
      email: parceiro.email,
      telefone: parceiro.telefone,
      horario: parceiro.horario,
      validade: parceiro.validade,
      promocao: parceiro.promocao,
    };
  }
  async atualizar(id: number, info: AtualizarParceiroRequest): Promise<void> {
    const parceiro = await this.parceiroRepo.findOne(id);
    if (!parceiro) {
      throw new ParceiroNaoEncontrado(id);
    }

    parceiro.nome = info.nome ?? parceiro.nome;
    parceiro.senha = info.senha ?? parceiro.senha;
    parceiro.email = info.email ?? parceiro.email;
    parceiro.logo = info.logo ?? parceiro.logo;
    parceiro.validade = info.validade ?? parceiro.validade;
    parceiro.horario = info.horario ?? parceiro.horario;
    parceiro.telefone = info.telefone ?? parceiro.telefone;
    parceiro.promocao = info.promocao ?? parceiro.promocao;
    await this.parceiroRepo.update(id, parceiro);
  }

  async desativar(id: number): Promise<void> {
    const parceiro = await this.parceiroRepo.findOne(id);
    if (!parceiro) {
      throw new ParceiroNaoEncontrado(id);
    }

    parceiro.isAtivo = false;

    await this.parceiroRepo.update(id, parceiro);
  }
}
