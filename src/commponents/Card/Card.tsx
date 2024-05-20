import React from 'react';

interface Props {
    rank: keyof RankInter;
    suit: keyof SuitInter;
}

interface SuitInter {
    diams: string;
    hearts: string;
    clubs: string;
    spades: string;
}

interface RankInter {
    j: string;
    q: string;
    k: string;
    a: string;
}

const suits: SuitInter = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
};

const ranks: RankInter = {
    j: 'J',
    q: 'Q',
    k: 'K',
    a: 'A',
};

const Card: React.FC<Props> = ({rank, suit}) => {
    const cardSuit = suits[suit];
    const cardRank = ranks[rank]

    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{cardRank}</span>
            <span className="suit">{cardSuit}</span>
        </span>
    );
};

export default Card;