import React from 'react';

interface Props {
    rank: string;
    suit: string;
}

const suitSymbols: { [key: string]: string }  = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
};

const ranks: { [key: string]: string }  = {
    J: 'j',
    Q: 'q',
    K: 'k',
    A: 'a',
};

const Card: React.FC<Props> = ({rank, suit}) => {

    return (
        <span className={`card rank-${ranks.rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suitSymbols[suit]}</span>
        </span>
    );
};

export default Card;