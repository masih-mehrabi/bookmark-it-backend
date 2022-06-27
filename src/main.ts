import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';;
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
  }));
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, PATCH, DELETE'
  })
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
