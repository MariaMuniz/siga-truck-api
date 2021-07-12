import { NotFoundException } from '@nestjs/common';

export class ParceiroNaoEncontrado extends NotFoundException {
  constructor(id: number) {
    super(`Não foi encontrado nenhum parceiro com o id ${id}`);
  }
}
