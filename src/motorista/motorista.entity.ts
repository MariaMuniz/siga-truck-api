import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Veiculo } from './veiculo/veiculo.entity';

@Entity()
export class Motorista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column({ type: 'float' })
  latitude: number;

  @Column({ type: 'float' })
  longitude: number;

  @Column()
  email: string;

  @Column({ default: true })
  isDisponivel: boolean;

  @Column()
  cpf: number;

  @Column()
  rg: number;

  @Column()
  telefone: number;

  @Column()
  estadoCivil: string;

  @Column()
  sexo: string;

  @Column()
  preferenciaEstado: string;

  @Column()
  preferenciaCidade: string;

  @Column()
  dataDeNascimento: Date;

  @Column()
  fotoCNH: string;

  @Column()
  indicacao: string;

  @Column()
  zap: number;

  @Column({ default: true })
  isAtivo: boolean;

  @OneToMany(() => Veiculo, (veiculo) => veiculo.motorista)
  veiculos: Veiculo[];
}
