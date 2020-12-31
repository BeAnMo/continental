import { SuitTypes, ValueAbbrvTypes } from '../../entities/Deck/constants';

const useSuitValue = (s, v) => {
    const V = v.slice(0, 1).toUpperCase();

    switch (s) {
        case 'diamonds':
            return ['red', V, <>&diams;</>];

        case 'hearts':
            return ['red', V, <>&hearts;</>];

        case 'spades':
            return ['black', V, <>&spades;</>];

        case 'clubs':
            return ['black', V, <>&clubs;</>];

        default:
            return ['black', 'Joker'];
    }
};



const PlayingCard = ({ suit, value }) => {
    const [color, V, S] = useSuitValue(suit, value);

    return (
        <div
            style={{
                color,
                height: '100px',
                width: '60px',
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-start',
                    flexDirection: 'row'
                }}
            >
                <div style={{ marginLeft: '3px' }}>{V}</div>
                <div style={{ marginRight: '3px' }}>{S}</div>
            </div>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-end',
                    flexDirection: 'row'
                }}
            >
                <div style={{ marginLeft: '3px' }}>{S}</div>
                <div style={{ marginRight: '3px' }}>{V}</div>
            </div>


        </div>
    );
};

PlayingCard.defaultProps = {
    suit: ''
};

PlayingCard.propTypes = {
    suit: SuitTypes,
    value: ValueAbbrvTypes.isRequired
};

export default PlayingCard;