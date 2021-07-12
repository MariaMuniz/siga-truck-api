import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Motorista } from '../motorista.entity';
import { Categoria } from './categoria.enum';

@Entity()
export class Veiculo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: Categoria;

  @Column()
  placa: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  cor: string;

  @Column()
  ano: number;

  @Column()
  capacidade: string;

  @Column()
  eixos: number;

  @Column()
  rastreadores: string[];

  @Column()
  fotoFrente: string;

  @Column()
  fotoCRLV: string;

  @ManyToOne(() => Motorista, (motorista) => motorista.veiculos)
  motorista: Motorista;

  @Column({ default: true })
  isAtivo: boolean;
}
