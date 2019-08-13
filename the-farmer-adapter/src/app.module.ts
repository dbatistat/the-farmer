import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FARMER_INPUT_SERVICE, FARMER_OUTPUT_SERVICE } from './constants';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './enviroment';
import { VideoEntity } from './entities/video.entity';
import { VideoService } from './video.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: FARMER_INPUT_SERVICE,
      transport: Transport.RMQ,
      options: {
        urls: [environment.RMQ_URL],
        queue: FARMER_INPUT_SERVICE,
        queueOptions: { durable: false },
      },
    },
    {
      name: FARMER_OUTPUT_SERVICE,
      transport: Transport.RMQ,
      options: {
        urls: [environment.RMQ_URL],
        queue: FARMER_OUTPUT_SERVICE,
        queueOptions: { durable: false },
      },
    },
  ]), TypeOrmModule.forRoot({
    type: 'mysql',
    name: environment.CONNECTION_NAME,
    host: environment.TYPEORM_HOST,
    port: environment.TYPEORM_PORT,
    username: environment.TYPEORM_USERNAME,
    password: environment.TYPEORM_PASSWORD,
    database: environment.TYPEORM_DATABASE,
    entities: [__dirname + environment.TYPEORM_ENTITIES],
    synchronize: environment.TYPEORM_SYNCHRONIZE,
  }), TypeOrmModule.forFeature([VideoEntity], environment.CONNECTION_NAME)],
  controllers: [AppController],
  providers: [AppService, VideoService],
})
export class AppModule {
}
