import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CriarFreteRequest } from './dtos/criar-frete-request';
import { CriarFreteResponse } from './dtos/criar-frete-response';
import { RecuperarFreteResponse } from './dtos/recuperar-frete-response';
import { FreteService } from './frete.service';
import { AtualizarFreteRequest } from './dtos/atualizar-frete-request';

@Controller('fretes')
export class FreteController {
  constructor(private readonly freteService: FreteService) {}

  @Post()
  criarFrete(@Body() request: CriarFreteRequest): Promise<CriarFreteResponse> {
    return this.freteService.inserir(request);
  }

  @Get('/:id')
  recuperarFrete(@Param('id') id: number): Promise<RecuperarFreteResponse> {
    return this.freteService.recuperar(id);
  }

  @Patch('/:id')
  atualizarInformacoes(
    @Param('id') id: number,
    @Body() info: AtualizarFreteRequest,
  ): Promise<void> {
    return this.freteService.atualizar(id, info);
  }

  @Delete('/:id')
  deletarFrete(@Param('id') id: number) {
    return this.freteService.desativar(id);
  }
}
