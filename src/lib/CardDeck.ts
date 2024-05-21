import Card from './Card.ts';

const getRandomId = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

class CardDeck {
    public cards: Card[] = [];

    constructor() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];
        let id = 1;

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit, id));
                id++;
            }
        }
    }

    getCard(): Card {
        const oneCard = this.cards.splice(getRandomId(0, this.cards.length));
        console.log(oneCard);
        return oneCard[0];
    }

    getCards(howMany: number): Card[] {
        const Card: Card[] = [];
        for (let i = 0; i < howMany; i++ ) {
            Card.push(this.getCard());
        }
        return Card;
    }
}

export default CardDeck;
