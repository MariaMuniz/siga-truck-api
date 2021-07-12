import { CriarVeiculoResponse } from './../veiculo/dtos/criar-veiculo-response';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AtualizarMotoristaRequest } from './dtos/atualizar-motorista-request';
import { CriarMotoristaRequest } from './dtos/criar-motorista-request';
import { CriarMotoristaResponse } from './dtos/criar-motorista-response';
import { RecuperarMotoristaResponse } from './dtos/recuperar-motorista-response';
import { MotoristaService } from './motorista.service';
import { CriarVeiculoRequest } from './dtos/criar-veiculo-request';

@Controller('motoristas')
export class MotoristaController {
  constructor(private readonly motoristaService: MotoristaService) {}

  @Post()
  criarMotorista(
    @Body() request: CriarMotoristaRequest,
  ): Promise<CriarMotoristaResponse> {
    return this.motoristaService.inserir(request);
  }

  @Get('/:id')
  recuperarMotorista(
    @Param('id') id: number,
  ): Promise<RecuperarMotoristaResponse> {
    return this.motoristaService.recuperar(id);
  }

  @Patch('/:id')
  atualizarInformacoes(
    @Param('id') id: number,
    @Body() info: AtualizarMotoristaRequest,
  ): Promise<void> {
    return this.motoristaService.atualizar(id, info);
  }

  @Delete('/:id')
  deletarMotorista(@Param('id') id: number) {
    return this.motoristaService.desativar(id);
  }

  @Post('/motoristas/:id/veiculos')
  adicionarVeiculo(
    @Param('id') motoristaId: number,
    @Body() request: CriarVeiculoRequest,
  ): Promise<CriarVeiculoResponse> {
    return this.motoristaService.cadastrarVeiculo(motoristaId, request);
  }
}
