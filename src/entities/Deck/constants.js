import PropTypes from 'prop-types';

export const SUITS = ['diamonds', 'hearts', 'clubs', 'spades', ''];
export const SuitTypes = PropTypes.oneOf(SUITS);

export const VALUE_ABBRVS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'ja',
    'q',
    'k',
    'jo'
];
export const ValueAbbrvTypes = PropTypes.oneOf(VALUE_ABBRVS);

export const CardType = PropTypes.shape({
    value: ValueAbbrvTypes.isRequired,
    suit: SuitTypes
});

export const CardsType = PropTypes.arrayOf(CardType);