import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Port 4000 locally (web uses 3000). Render sets PORT in production.
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
