import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParceiroController } from './parceiro.controller';
import { Parceiro } from './parceiro.entity';
import { ParceiroService } from './parceiro.service';

@Module({
  imports: [TypeOrmModule.forFeature([Parceiro])],
  providers: [ParceiroService],
  controllers: [ParceiroController],
})
export class ParceiroModule {}
