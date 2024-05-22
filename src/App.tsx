import './App.css';
import Card from "./commponents/Card/Card.tsx";
import CardDeck from "./lib/CardDeck.ts";
import Card2 from "./lib/Card.ts";
import {useState} from "react";

function App() {
    const [cards, setCards] = useState<Card2[]>([]);

    const dealCards = () => {
        const deck = new CardDeck();
        setCards(deck.getCards(5));
    };

    return (
        <>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card) => (
                        <Card  rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}
            <button onClick={dealCards}>Раздать карты</button>
            {
                cards.length > 0 ? <p>Карты есть</p> : <p>Карт нет, нажмите на кнопку что бы получить</p>
            }
        </>
    );
}

export default App;





