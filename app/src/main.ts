import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { initView } from '../plugin/nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  initView(app, join(__dirname, '../../app/views'));

  await app.listen(process.env.PORT || 3000);

  console.log(`Listening on: 127.0.0.1:${process.env.PORT || 3000}`);
}
bootstrap();
