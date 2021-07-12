import { NotFoundException } from '@nestjs/common';

export class EmpresaNaoEncontrada extends NotFoundException {
  constructor(id: number) {
    super(`Não foi encontrado nenhuma empresa com o id ${id}`);
  }
}
