import './App.css';
import Card from './commponents/Card/Card.tsx';
import CardDeck from './lib/CardDeck.ts';
import Card2 from './lib/Card.ts';
import {useState} from 'react';
import PokerHand from './lib/PokerHand';

const App = () => {
  const [deck, setDeck] = useState<CardDeck | null>(null);
  const [cards, setCards] = useState<Card2[]>([]);
  const [remainingCards, setRemainingCards] = useState<number>(0);
  const [handOutcome, setHandOutcome] = useState<string>('');


  let newDeck;

  const shuffle = () => {
    newDeck = new CardDeck();
    setDeck(newDeck);
    setRemainingCards(52);
  };

  const dealCards = () => {
    if (deck && remainingCards >= 5) {
      const newCards = deck.getCards(5);
      setCards(newCards);
      setRemainingCards(remainingCards - 5);
      const hand = new PokerHand(cards);
      setHandOutcome(hand.getOutcome());
    }
  };

  return (
    <>
      {cards.length > 0 && (
        <div className="playingCards faceImages">
          {cards.map((card) => (
            <Card rank={card.rank} suit={card.suit}/>
          ))}
        </div>
      )}
      {
        cards.length > 0 ?
          <div>
            <p>Ваши Карты</p>

          </div> :
          <div>
            <p>Карт нет, нажмите на кнопку что бы затосовать карты и раздайте карты</p>
          </div>
      }
      <p>Количество карт в колоде: {remainingCards}</p>
      <button onClick={shuffle}>Перетасовать карты</button>
      <button onClick={dealCards}>Раздать карты</button>
      {
        remainingCards > 5 ? <p></p> : <p>В колоде недотаточно карт, перетасуйтe её</p>
      }
      {<p>Комбинация: {handOutcome}</p>}
    </>
  );
};

export default App;





