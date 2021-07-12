import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { AtualizarImplementoRequest } from './dtos/atualizar-implemento-request';
import { CriarImplementoRequest } from './dtos/criar-implemento-request';
import { CriarImplementoResponse } from './dtos/criar-implemento-response';
import { RecuperarImplementoResponse } from './dtos/recuperar-implemento-response';
import { ImplementoService } from './implemento.service';

@Controller('implemento')
export class ImplementoController {
  constructor(private readonly implementoService: ImplementoService) {}

  @Post()
  criarImplemento(
    @Body() request: CriarImplementoRequest,
  ): Promise<CriarImplementoResponse> {
    return this.implementoService.inserir(request);
  }

  @Get('/:id')
  recuperarImplemento(
    @Param('id') id: number,
  ): Promise<RecuperarImplementoResponse> {
    return this.implementoService.recuperar(id);
  }
  @Patch('/:id')
  atualizarInformacoes(
    @Param('id') id: number,
    @Body() info: AtualizarImplementoRequest,
  ): Promise<void> {
    return this.implementoService.atualizar(id, info);
  }

  @Delete('/:id')
  deletarImplemento(@Param('id') id: number) {
    return this.implementoService.desativar(id);
  }
}
