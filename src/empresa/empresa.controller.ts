import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { AtualizarEmpresaRequest } from './dtos/atualizar-empresa-request';
import { CriarEmpresaRequest } from './dtos/criar-empresa-request';
import { CriarEmpresaResponse } from './dtos/criar-empresa-response';
import { RecuperarEmpresaResponse } from './dtos/recuperar-empresa-response';
import { EmpresaService } from './empresa.service';

@Controller('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post()
  criarEmpresa(
    @Body() request: CriarEmpresaRequest,
  ): Promise<CriarEmpresaResponse> {
    return this.empresaService.inserir(request);
  }

  @Get('/:id')
  recuperarEmpresa(@Param('id') id: number): Promise<RecuperarEmpresaResponse> {
    return this.empresaService.recuperar(id);
  }
  @Patch('/:id')
  atualizarInformacoes(
    @Param('id') id: number,
    @Body() info: AtualizarEmpresaRequest,
  ): Promise<void> {
    return this.empresaService.atualizar(id, info);
  }

  @Delete('/:id')
  deletarEmpresa(@Param('id') id: number) {
    return this.empresaService.desativar(id);
  }
}
