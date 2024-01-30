import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './main.swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await setupSwagger(app, '/api');

  await app.listen(3000);
}
bootstrap();
