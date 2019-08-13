import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FARMER_INPUT_SERVICE, FARMER_OUTPUT_SERVICE } from './constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'farmer_input_service',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@localhost:5672`],
          queue: FARMER_INPUT_SERVICE,
          queueOptions: { durable: false },
        },
      },
      {
        name: 'farmer_output_service',
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@localhost:5672`],
          queue: FARMER_OUTPUT_SERVICE,
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
