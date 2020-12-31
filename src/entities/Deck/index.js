import { SUITS, VALUE_ABBRVS } from './constants';

const VALID_SUITS = SUITS.slice(0, -1);
const VALID_ABBRVS = VALUE_ABBRVS.slice(0, -1);
const JOKER = { value: 'jo', suit: '' };

const buildDeck = (suits, values) => {
    let results = [JOKER, JOKER];

    suits.forEach(suit => {
        values.forEach(value => {
            results.push({ suit, value });
        });
    });

    return results;
};

const shuffleArray = deck => {
    return deck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const repeatArray = (arr, n) => {
    let results = [...arr];

    for (let i = 1; i < n; i++) {
        results.push(...arr);
    }

    return results;
};

export default class Deck {
    constructor(n) {
        const deck = buildDeck(VALID_SUITS, VALID_ABBRVS);

        this.n = n;
        this.original = n <= 1
            ? deck
            : repeatArray(deck, n);
        this.deck = [...this.original];
        this.cardsLeft = this.deck.length;
    }

    restart() {
        return new Deck(this.n);
    }

    shuffle() {
        this.deck = shuffleArray(this.deck);

        return this;
    }

    draw(n) {
        const front = this.deck.slice(0, n);
        const back = this.deck.slice(n);

        this.deck = back;
        this.cardsLeft = this.deck.length;

        return front;
    }

    remaining() {
        return this.cardsLeft;
    }
}

window.Deck = Deck;