import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Parceiro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  senha: string;

  @Column()
  email: string;

  @Column()
  logo: string;

  @Column()
  horario: string;

  @Column()
  telefone: number;

  @Column()
  validade: string;

  @Column()
  promocao: string;

  @Column({ default: true })
  isAtivo: boolean;
}
