import { Categoria } from '../veiculo/categoria.enum';

export class CriarVeiculoRequest {
  categoria: Categoria;
  modelo: string;
  marca: string;
  cor: string;
  ano: number;
  capacidade: string;
  eixos: number;
  placa: string;
  rastreadores: string[];
  fotoFrente: string;
  fotoCRLV: string;
}
