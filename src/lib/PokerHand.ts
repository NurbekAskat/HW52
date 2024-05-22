import Card from './Card.ts';

class PokerHand {
  protected cards: Card[];
  protected cardValues;
  protected suits;

  constructor(cards: Card[]) {
    this.cards = cards;
    this.cardValues = this.getCardValues(this.cards);
    this.suits = this.getCardSuits(this.cards);
  }

  getCardValues(cards: Card[]): number[] {
    const valueMap: { [key: string]: number } = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
      'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return cards.map(card => valueMap[card.rank]);
  }

  getCardSuits(cards: Card[]): string[] {
    return cards.map(card => card.suit);
  }


  isFlush() {
    for (let i = 1; i < 5; i++) {
      if (this.suits[0] !== this.suits[i]) {
        return false;
      }
    }

  }

  isOnepair() {
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        if (this.cardValues[j] === this.cardValues[i] && j !== i) {
          return true;
        }
      }
    }
    return false;
  }

  isTwoPair() {
    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 5; i++) {
        if (this.cardValues[j] === this.cardValues[i] && j !== i) {
          const lastCards = this.cards;
          lastCards.splice(j);
          lastCards.splice(i);
          const lastCombo = this.getCardValues(lastCards);
          for (let y = 0; y < 3; y++) {
            for (let u = 0; u < 3; u++) {
              if (lastCombo[y] === lastCombo[u] && y !== u) {
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }

  isThreeOfAKind() {
    for (let y = 0; y < 5; y++) {
      for (let i = 0; i < 5; i++) {
        if (this.cardValues[y] === this.cardValues[i] && y !== i) {
          for (let j = 0; j < 5; j++) {
            if (this.cardValues[y] === this.cardValues[i] && this.cardValues[y] === this.cardValues[j] && y !== i && y !== j)
              return true;
          }
        }
      }
    }
    return false;
  }

  getOutcome() {
    const flush = this.isFlush();
    const onePair = this.isOnepair();
    const twoPair = this.isTwoPair();
    const threeOfAKind = this.isThreeOfAKind();

    if (flush) {
      return 'Флэш';
    } else if (threeOfAKind) {
      return 'Тройка';
    } else if (twoPair) {
      return 'Две пары';
    } else if (onePair) {
      return 'Одна пара';
    } else {
      return 'Старшая карта';
    }
  }
}

export default PokerHand;