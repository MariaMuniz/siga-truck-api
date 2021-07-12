import { NotFoundException } from '@nestjs/common';

export class MotoristaNaoEncontrado extends NotFoundException {
  constructor(id: number) {
    super(`Não foi encontrado nenhum motorista com o id ${id}`);
  }
}
