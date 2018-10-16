const greet = require('./lib/greet.js');

describe('Testing the greet module', () => {
    it('should return null when a number is passed in', () => {
        expect(greet(1)).toBe(null);
    });
});

describe('Testing the greet module', () => {
    it('should return hello + name when a string is passed in', () => {
        expect(greet('world')).toBe('hello world');
    });
});

describe('Testing the greet module', () => {
    it('should return null when a boolean is passed in', () => {
        expect(greet(true)).toBe(null);
    });
});

describe('Testing the greet module', () => {
    it('should return null when an array is passed in', () => {
        expect(greet([1, 2])).toBe(null);
    });
});

describe('Testing the greet module', () => {
    it('should return null when an object is passed in', () => {
        expect(greet({greeting: 'hello'})).toBe(null);
    });
});