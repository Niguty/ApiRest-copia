import { BadRequestException, Injectable } from "@nestjs/common";
import { CardsRepository } from "../MONGO/cards.repository";
import { CreateCardDto } from "../dto/create-card.dto";
import { Card } from "../entities/card.entity";

@Injectable()
export class CardsService {
  constructor(private readonly cardsRepository: CardsRepository) {}

  async saveCard(newCard: CreateCardDto): Promise<Card> {
    return await this.cardsRepository.salvarCard(newCard);
  }

  async pegarCard(): Promise<Card[]> {
    return this.cardsRepository.pegarCard();
  }

  async pegarCardId(idCards: string): Promise<Card> {
    return this.cardsRepository.pegarCardId(idCards);
  }

  async deleteCardsId(idCards: string): Promise<string> {
    return this.cardsRepository.deletarCard(idCards);
  }

    async criaDeck(): Promise<object>{
        console.log('chegou aqui');
        try {
            const apiCards = await fetch(`https://api.magicthegathering.io/v1/cards`);
            if(!apiCards.ok){
                throw new Error(`${apiCards.status}`);
            }
            const apiCardsJson = await apiCards.json();
            console.log(apiCardsJson);
            return apiCardsJson;
        } catch (error) {
            throw new BadRequestException("Return of api was {}");
        }
        
    }
}
