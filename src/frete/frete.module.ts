import { Entity } from 'typeorm';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreteController } from './frete.controller';

import { Frete } from './frete.entity';
import { FreteService } from './frete.service';

@Module({
  imports: [TypeOrmModule.forFeature([Frete])],
  providers: [FreteService],
  controllers: [FreteController],
})
export class FreteModule {}
