import { Categoria } from '../categoria.enum';

export class CriarImplementoRequest {
  categoria: Categoria;
  modelo: string;
  marca: string;
  cor: string;
  ano: number;
  capacidade: string;
  eixos: number;
}
