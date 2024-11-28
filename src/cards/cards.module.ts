import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsController } from './controller/cards.controller';
import { CardsService } from './service/cards.service';


@Module({
  imports: [
    
    MongooseModule.forRoot('mongodb://localhost/deck')

  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
