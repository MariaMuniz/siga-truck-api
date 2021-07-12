import { NotFoundException } from '@nestjs/common';

export class FreteNaoEncontrado extends NotFoundException {
  constructor(id: number) {
    super(`Não foi encontrado nenhum frete com o id ${id}`);
  }
}
