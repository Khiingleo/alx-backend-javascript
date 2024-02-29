const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber function', function() {
    it('should return the rounded sum of two numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 2.5), 4);

        assert.strictEqual(calculateNumber(1.2, 2.7), 4);

        assert.strictEqual(calculateNumber(3.7, 4.3), 8);
    });
    it('should correctly add two positive integer numbers', () => {
        assert.equal(calculateNumber(2, 6), 8);
        assert.equal(calculateNumber(1, 2), 3);
    });
    it('should return the rounded sum of a positive integer and a float number', () => {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
        assert.strictEqual(calculateNumber(1, 2.6), 4);
    });
});