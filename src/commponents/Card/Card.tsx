import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const suitSymbols: { [key: string]: string } = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const Card: React.FC<Props> = ({rank, suit}) => {

  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitSymbols[suit]}</span>
    </span>
  );
};

export default Card;