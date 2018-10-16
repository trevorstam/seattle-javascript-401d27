const arithmetic = require('./lib/arithmetic.js');

describe('Testing the arithmetic module', () => {
    it('should return null when a string is passed in', () => {
        expect(arithmetic('1', '2')).toBe(null);
    });
});

describe('Testing the arithmetic module', () => {
    it('should return the sum and the subtraction of the parameter values when numbers are passed in', () => {
        expect(arithmetic(1, 2)).toEqual({add: 3, sub: -1});
    });
});

describe('Testing the arithmetic module', () => {
    it('should return null when two arrays  are passed in', () => {
        expect(arithmetic([1, 2, 3], [1, 2, 3])).toBe(null);
    });
});

describe('Testing the arithmetic module', () => {
    it('should return null when two arrays  are passed in', () => {
        expect(arithmetic({flyingCow: true}, 2)).toBe(null);
    });
});
