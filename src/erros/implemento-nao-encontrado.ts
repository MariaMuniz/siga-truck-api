import { NotFoundException } from '@nestjs/common';

export class ImplementoNaoEncontrado extends NotFoundException {
  constructor(id: number) {
    super(`Não foi encontrado nenhum implemento com o id ${id}`);
  }
}
