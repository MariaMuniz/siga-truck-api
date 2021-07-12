import { CriarEmpresaRequest } from './dtos/criar-empresa-request';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './empresa.entity';
import { CriarEmpresaResponse } from './dtos/criar-empresa-response';
import { RecuperarEmpresaResponse } from './dtos/recuperar-empresa-response';
import { EmpresaNaoEncontrada } from '../erros/empresa-nao-encontrada';
import { AtualizarEmpresaRequest } from './dtos/atualizar-empresa-request';
@Injectable()
export class EmpresaService {
  @InjectRepository(Empresa)
  private readonly empresaRepo: Repository<Empresa>;

  async inserir(request: CriarEmpresaRequest): Promise<CriarEmpresaResponse> {
    let empresa = new Empresa();
    empresa.nome = request.nome;
    empresa.senha = request.senha;
    empresa.logo = request.logo;
    empresa.email = request.email;
    empresa.cnpj = request.cnpj;
    empresa.telefone = request.telefone;

    empresa = await this.empresaRepo.save(empresa);

    return { id: empresa.id };
  }

  async recuperar(id: number): Promise<RecuperarEmpresaResponse> {
    const empresa = await this.empresaRepo.findOne(id);

    return {
      nome: empresa.nome,
      senha: empresa.senha,
      logo: empresa.logo,
      telefone: empresa.telefone,
      email: empresa.email,
      cnpj: empresa.cnpj,
    };
  }

  async atualizar(id: number, info: AtualizarEmpresaRequest): Promise<void> {
    const empresa = await this.empresaRepo.findOne(id);
    if (!empresa) {
      throw new EmpresaNaoEncontrada(id);
    }

    empresa.nome = info.nome ?? empresa.nome;
    empresa.email = info.email ?? empresa.email;
    empresa.logo = info.logo ?? empresa.logo;
    empresa.senha = info.senha ?? empresa.senha;
    empresa.telefone = info.telefone ?? empresa.telefone;

    await this.empresaRepo.update(id, empresa);
  }

  async desativar(id: number): Promise<void> {
    const empresa = await this.empresaRepo.findOne(id);
    if (!empresa) {
      throw new EmpresaNaoEncontrada(id);
    }

    empresa.isAtivo = false;

    await this.empresaRepo.update(id, empresa);
  }
}
