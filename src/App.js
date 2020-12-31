import { useRef, useState, useEffect } from 'react';

import Hand from './components/Hand'
import Deck from './entities/Deck';

const useDeck = (deckNum) => {
    const deck = useRef(new Deck(deckNum));

    return deck.current;
};

function App() {
    const deck = useDeck(1);
    const [drawAmount, setDrawAmount] = useState(1);
    const [hand, setHand] = useState([]);

    const handleDraw = () => {
        const drawn = deck.draw(drawAmount);

        setHand(prev => {
            const newHand = [...prev, ...drawn];

            return newHand;
        });
    };

    useEffect(() => {
        deck.shuffle();
    }, []);

    return (
        <div>
            <div>
                <input
                    value={drawAmount}
                    type="number"
                    min="1" max="10"
                    onChange={e => setDrawAmount(parseFloat(e.target.value))}
                />
                <button onClick={handleDraw}>Draw</button>
                <button onClick={() => deck.shuffle()}>Shuffle</button>
                <p id="cards-left">{deck.remaining()} cards remaining</p>
            </div>
            <Hand cards={hand} />
        </div>
    );
}

export default App;
