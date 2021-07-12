import { Categoria } from './veiculo/categoria.enum';
import { CriarVeiculoResponse } from './../veiculo/dtos/criar-veiculo-response';
import { CriarMotoristaRequest } from './dtos/criar-motorista-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motorista } from './motorista.entity';
import { CriarMotoristaResponse } from './dtos/criar-motorista-response';
import { RecuperarMotoristaResponse } from './dtos/recuperar-motorista-response';
import { AtualizarMotoristaRequest } from './dtos/atualizar-motorista-request';
import { MotoristaNaoEncontrado } from '../erros/motorista-nao-encontrado';
import { CriarVeiculoRequest } from './dtos/criar-veiculo-request';
import { Veiculo } from './veiculo/veiculo.entity';

@Injectable()
export class MotoristaService {
  @InjectRepository(Motorista)
  private readonly motoristaRepo: Repository<Motorista>;
  private readonly veiculoRepo: Repository<Veiculo>;

  async inserir(
    request: CriarMotoristaRequest,
  ): Promise<CriarMotoristaResponse> {
    let motorista = new Motorista();
    motorista.email = request.email;
    motorista.isDisponivel = true;
    motorista.nome = request.nome;
    motorista.cpf = request.cpf;
    motorista.rg = request.rg;
    motorista.senha = request.senha;
    motorista.telefone = request.telefone;
    motorista.estadoCivil = request.estadoCivil;
    motorista.sexo = request.sexo;
    motorista.preferenciaEstado = request.preferenciaEstado;
    motorista.preferenciaCidade = request.preferenciaCidade;
    motorista.dataDeNascimento = request.dataDeNascimento;
    motorista.fotoCNH = request.fotoCNH;
    motorista.indicacao = request.indicacao;
    motorista.latitude = Number(request.latitude);
    motorista.longitude = Number(request.longitude);
    motorista.zap = request.zap;

    motorista = await this.motoristaRepo.save(motorista);

    return { id: motorista.id };
  }

  async recuperar(id: number): Promise<RecuperarMotoristaResponse> {
    const motorista = await this.motoristaRepo.findOne(id, {
      where: {
        isAtivo: true,
      },
    });

    if (!motorista) {
      throw new MotoristaNaoEncontrado(id);
    }

    return {
      email: motorista.email,
      isDisponivel: motorista.isDisponivel,
      nome: motorista.nome,
      senha: motorista.senha,
      cpf: motorista.cpf,
      rg: motorista.rg,
      telefone: motorista.telefone,
      estadoCivil: motorista.estadoCivil,
      sexo: motorista.sexo,
      preferenciaEstado: motorista.preferenciaEstado,
      preferenciaCidade: motorista.preferenciaCidade,
      dataDeNascimento: motorista.dataDeNascimento,
      fotoCNH: motorista.fotoCNH,
      indicacao: motorista.indicacao,
      zap: motorista.zap,
      latitude: motorista.latitude,
      longitude: motorista.longitude,
    };
  }

  async atualizar(id: number, info: AtualizarMotoristaRequest): Promise<void> {
    const motorista = await this.motoristaRepo.findOne(id);
    if (!motorista) {
      throw new MotoristaNaoEncontrado(id);
    }

    motorista.nome = info.nome ?? motorista.nome;
    motorista.longitude = info.longitude ?? motorista.longitude;
    motorista.latitude = info.latitude ?? motorista.latitude;
    motorista.isDisponivel = info.disponibilidade ?? motorista.isDisponivel;
    motorista.senha = info.senha ?? motorista.senha;
    motorista.email = info.email ?? motorista.email;
    motorista.cpf = info.cpf ?? motorista.cpf;
    motorista.rg = info.rg ?? motorista.rg;
    motorista.telefone = info.telefone ?? motorista.telefone;
    motorista.sexo = info.sexo ?? motorista.sexo;
    motorista.preferenciaEstado =
      info.preferenciaEstado ?? motorista.preferenciaEstado;
    motorista.preferenciaCidade =
      info.preferenciaCidade ?? motorista.preferenciaCidade;
    motorista.dataDeNascimento =
      info.dataDeNascimento ?? motorista.dataDeNascimento;
    motorista.estadoCivil = info.estadoCivil ?? motorista.estadoCivil;
    motorista.fotoCNH = info.fotoCNH ?? motorista.fotoCNH;
    motorista.indicacao = info.indicacao ?? motorista.indicacao;
    motorista.zap = info.zap ?? motorista.zap;
    await this.motoristaRepo.update(id, motorista);
  }

  async desativar(id: number): Promise<void> {
    const motorista = await this.motoristaRepo.findOne(id);
    if (!motorista) {
      throw new MotoristaNaoEncontrado(id);
    }

    motorista.isAtivo = false;

    await this.motoristaRepo.update(id, motorista);
  }

  async cadastrarVeiculo(
    motoristaId: number,
    request: CriarVeiculoRequest,
  ): Promise<CriarVeiculoResponse> {
    const motorista = await this.motoristaRepo.findOne(motoristaId);
    if (!motorista) {
      throw new MotoristaNaoEncontrado(motoristaId);
    }

    let veiculo = new Veiculo();
    veiculo.categoria = request.categoria;
    veiculo.ano = request.ano;
    veiculo.placa = request.placa;
    veiculo.modelo = request.modelo;
    veiculo.marca = request.marca;
    veiculo.cor = request.cor;
    veiculo.capacidade = request.capacidade;
    veiculo.rastreadores = request.rastreadores;
    veiculo.eixos = request.eixos;
    veiculo.fotoCRLV = request.fotoCRLV;
    veiculo.fotoFrente = request.fotoFrente;

    veiculo = await this.veiculoRepo.save(veiculo);

    return {
      id: veiculo.id,
    };
  }
}
