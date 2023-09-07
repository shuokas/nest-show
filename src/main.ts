import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // 这里必须调用，不然错都找不到
  const app = await NestFactory.create(AppModule);
  await app.listen(3010);
}
bootstrap();
