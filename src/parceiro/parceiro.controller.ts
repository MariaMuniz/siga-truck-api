import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { AtualizarEmpresaRequest } from 'src/empresa/dtos/atualizar-empresa-request';
import { CriarParceiroRequest } from './dtos/criar-parceiro-request';
import { CriarParceiroResponse } from './dtos/criar-parceiro-response';
import { RecuperarParceiroResponse } from './dtos/recuperar-parceiro-response';
import { ParceiroService } from './parceiro.service';

@Controller('parceiros')
export class ParceiroController {
  constructor(private readonly parceiroService: ParceiroService) {}

  @Post()
  criarParceiro(
    @Body() request: CriarParceiroRequest,
  ): Promise<CriarParceiroResponse> {
    return this.parceiroService.inserir(request);
  }

  @Get('/:id')
  recuperarParceiro(
    @Param('id') id: number,
  ): Promise<RecuperarParceiroResponse> {
    return this.parceiroService.recuperar(id);
  }
  @Patch('/:id')
  atualizarInformacoes(
    @Param('id') id: number,
    @Body() info: AtualizarEmpresaRequest,
  ): Promise<void> {
    return this.parceiroService.atualizar(id, info);
  }

  @Delete('/:id')
  deletarParceiro(@Param('id') id: number) {
    return this.parceiroService.desativar(id);
  }
}
