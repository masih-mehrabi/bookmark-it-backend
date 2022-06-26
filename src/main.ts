import { Get, Post, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';;
import { AppModule } from './app.module';

import { groupEnd } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE'
  })
  await app.listen(3000);
}
bootstrap();
