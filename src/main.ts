import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


git remote add origin https://github.com/JAVOHIRQAYUMOV14050725/uzum_market.git
 git branch -D vali-feature
git push -u origin main