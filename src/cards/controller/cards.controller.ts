import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateCardDto } from '../dto/create-card.dto';
import { CardsService } from '../service/cards.service';
import { Cards } from '../MONGO/cards.interface';
import { Card } from '../entities/card.entity';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async findAll(): Promise<Card[]> {
    return this.cardsService.pegarCard();
  }

  @Get(':idCards')
  async findOne(@Param('idCards') idCards: string): Promise<Card> {
    return await this.cardsService.pegarCardId(idCards);
  }

  @Post()
  async saveCards(@Body() newCard: CreateCardDto): Promise<Card> {
    return await this.cardsService.saveCard(newCard);
  }

  @Delete(':idCards')
  async deleteCardsId(@Param('idCards') idCards: string): Promise<string> {
    return await this.cardsService.deleteCardsId(idCards);
  }
}

