import { Entity } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MotoristaController } from './motorista.controller';

import { Motorista } from './motorista.entity';
import { MotoristaService } from './motorista.service';

@Module({
  imports: [TypeOrmModule.forFeature([Motorista])],
  providers: [MotoristaService],
  controllers: [MotoristaController],
})
export class MotoristaModule {}
