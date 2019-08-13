export const environment = {
  API_PORT: 3000,
  API_PREFIX: 'api',
  API_CORS: '*',
  RMQ_URL: 'amqp://guest:guest@localhost:5672',
  CONNECTION_NAME: 'the_farmer',
  TYPEORM_CONNECTION: 'mysql',
  TYPEORM_HOST: '127.0.0.1',
  TYPEORM_PORT: 3306,
  TYPEORM_USERNAME: 'root',
  TYPEORM_PASSWORD: 'root',
  TYPEORM_DATABASE: 'the_farmer_db',
  TYPEORM_SYNCHRONIZE: true,
  TYPEORM_ENTITIES: '/**/*.entity{.ts,.js}'
};
