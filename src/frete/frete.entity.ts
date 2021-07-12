import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Frete {
  static findAll(): Frete[] | PromiseLike<Frete[]> {
    throw new Error('Method not implemented.');
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: string;

  @Column()
  telefoneEmpresa: string;

  @Column()
  nomeEmpresa: string;

  @Column()
  origemEstado: string;

  @Column()
  origemCidade: string;

  @Column()
  destinoEstado: string;

  @Column()
  destinoCidade: string;

  @Column()
  categoriaVeiculo: string;

  @Column()
  eixosVeiculo: number;

  @Column()
  categoriaCarreta: string;

  @Column()
  eixosCarreta: number;

  @Column()
  peso: number;

  @Column()
  quantidade: string;

  @Column()
  produto: string;

  @Column()
  tipoCarga: string;

  @Column()
  tipoPagamento: string;

  @Column()
  observacao: string;

  @Column()
  validade: Date;

  @Column({ default: true })
  isAtivo: boolean;
}
