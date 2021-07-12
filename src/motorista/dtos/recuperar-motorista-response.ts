export interface RecuperarMotoristaResponse {
  email: string;
  nome: string;
  senha: string;
  isDisponivel: boolean;
  cpf: number;
  rg: number;
  telefone: number;
  estadoCivil: string;
  sexo: string;
  preferenciaEstado: string;
  preferenciaCidade: string;
  dataDeNascimento: Date;
  fotoCNH: string;
  indicacao: string;
  zap: number;
  longitude: number;
  latitude: number;
}
