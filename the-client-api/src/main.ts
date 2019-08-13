import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { FARMER_OUTPUT_SERVICE } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const rbqOutput = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://guest:guest@localhost:5672`],
      queue: FARMER_OUTPUT_SERVICE,
      queueOptions: { durable: false },
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
}
bootstrap();
