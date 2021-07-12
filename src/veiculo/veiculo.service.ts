import { CriarVeiculoRequest } from '../motorista/dtos/criar-veiculo-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from '../motorista/veiculo/veiculo.entity';
import { CriarVeiculoResponse } from './dtos/criar-veiculo-response';

@Injectable()
export class VeiculoService {
  @InjectRepository(Veiculo)
  private readonly veiculoRepo: Repository<Veiculo>;

  async inserir(request: CriarVeiculoRequest): Promise<CriarVeiculoResponse> {
    let veiculo = new Veiculo();
    veiculo.categoria = request.categoria;
    veiculo.marca = request.marca;
    veiculo.modelo = request.modelo;
    veiculo.cor = request.cor;
    veiculo.ano = request.ano;
    veiculo.eixos = request.eixos;
    veiculo.capacidade = request.capacidade;
    veiculo.placa = request.placa;
    veiculo.rastreadores = [];
    veiculo.fotoFrente = request.fotoFrente;
    veiculo.fotoCRLV = request.fotoCRLV;

    veiculo = await this.veiculoRepo.save(veiculo);

    return { id: veiculo.id };
  }
}
