import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from './categoria.enum';

@Entity()
export class Implemento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: Categoria;

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

  @Column({ default: true })
  isAtivo: boolean;
}
