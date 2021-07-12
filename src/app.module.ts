import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Motorista } from './motorista/motorista.entity';
import { Parceiro } from './parceiro/parceiro.entity';
import { Frete } from './frete/frete.entity';
import { Implemento } from './implemento/implemento.entity';
import { Empresa } from './empresa/empresa.entity';
import { MotoristaModule } from './motorista/motorista.module';
import { FreteModule } from './frete/frete.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ImplementoModule } from './implemento/implemento.module';
import { ParceiroModule } from './parceiro/parceiro.module';
import { Veiculo } from './motorista/veiculo/veiculo.entity';

@Module({
  imports: [
    MotoristaModule,
    ParceiroModule,
    EmpresaModule,
    FreteModule,
    ImplementoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'siga_truck',
      entities: [Motorista, Veiculo, Parceiro, Frete, Implemento, Empresa],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
