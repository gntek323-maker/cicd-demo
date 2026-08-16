const { add, isEven } = require('./app');

describe('add function', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    test('adds zero', () => {
        expect(add(5, 0)).toBe(5);
    });
});

describe('isEven function', () => {
    test('returns true for even numbers', () => {
        expect(isEven(4)).toBe(true);
    });

    test('returns false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
    });

    test('zero is even', () => {
        expect(isEven(0)).toBe(true);
    });
});
