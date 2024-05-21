class Card {
    rank: string;
    suit: string;
    id: number;

    constructor(rank: string, suit: string, id: number) {
        this.rank = rank;
        this.suit = suit;
        this.id = id;
    }
}

export default Card;