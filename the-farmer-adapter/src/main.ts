import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { FARMER_INPUT_SERVICE } from './constants';
import { environment } from './enviroment';
import bodyParser = require('body-parser');
import cors = require('cors');

const API_DEFAULT_PORT = 3000;
const API_DEFAULT_PREFIX = 'api';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.use(bodyParser.json());
  app.use(cors({
    origin: environment.API_CORS || '*',
  }));
  app.setGlobalPrefix(environment.API_PREFIX || API_DEFAULT_PREFIX);

  const rbqInput = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [environment.RMQ_URL],
      queue: FARMER_INPUT_SERVICE,
      queueOptions: { durable: false },
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(environment.API_PORT || API_DEFAULT_PORT);
}

bootstrap();
