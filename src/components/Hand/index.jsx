import { CardType, CardsType } from "../../entities/Deck/constants";

import PlayingCard from '../PlayingCard';

const Hand = ({ cards }) => {
    return <div style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {cards.map((card, i) => (
            <div key={i} style={{ padding: '1rem' }}>
                <PlayingCard {...card} />
            </div>
        ))}
    </div>;
};

Hand.propTypes = {
    cards: CardsType.isRequired
};

export default Hand;