import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
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
  cnpj: number;

  @Column()
  telefone: number;

  @Column({ default: true })
  isAtivo: boolean;
}
