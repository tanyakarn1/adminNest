import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import connectDb from './dbconfig'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  connectDb();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
