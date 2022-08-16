import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DogsController } from './dogs/dogs.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
