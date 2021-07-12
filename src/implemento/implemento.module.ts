import { Entity } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImplementoController } from './implemento.controller';

import { Implemento } from './implemento.entity';
import { ImplementoService } from './implemento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Implemento])],
  providers: [ImplementoService],
  controllers: [ImplementoController],
})
export class ImplementoModule {}
