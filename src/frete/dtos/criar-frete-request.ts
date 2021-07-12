export class CriarFreteRequest {
  codigo: string;
  telefoneEmpresa: string;
  nomeEmpresa: string;
  origemEstado: string;
  origemCidade: string;
  destinoEstado: string;
  destinoCidade: string;
  categoriaVeiculo: string;
  eixosVeiculo: number;
  categoriaCarreta: string;
  eixosCarreta: number;
  peso: number;
  quantidade: string;
  produto: string;
  tipoCarga: string;
  tipoPagamento: string;
  observacao: string;
  validade: Date;
}
