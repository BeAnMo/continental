import Deck from './index';

describe('Deck entity with 1 deck', () => {
    const d0 = new Deck(1);

    it('should initialize with 54 cards', () => {
        expect(d0.remaining()).toBe(54);
    });

    it('should have 54 cards after shuffling', () => {
        d0.shuffle();

        expect(d0.remaining()).toBe(54);
    });


    it('should have 46 remaining cards after 8 single draws', () => {
        for (let i = 0; i < 8; i++) {
            const [drawn] = d0.draw(1);

            expect(drawn).toEqual(expect.objectContaining({ value: expect.any(String) }));
        }

        expect(d0.remaining()).toBe(46);
    });

    it('should have 0 remaining cards after 23 double draws', () => {
        for (let i = 0; i < 23; i++) {
            const [drawn] = d0.draw(2);

            expect(drawn).toEqual(expect.objectContaining({ value: expect.any(String) }));
        }

        expect(d0.remaining()).toBe(0);
    });
});