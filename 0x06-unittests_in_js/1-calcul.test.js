const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', function() {
    describe('SUM', () => {
        it('should return the rounded sum of two numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 2.5), 4);
            assert.strictEqual(calculateNumber('SUM', 1.2, 2.7), 4);
            assert.strictEqual(calculateNumber('SUM', 3.7, 4.3), 8);
        });
        it('should correctly add two positive integer numbers', () => {
            assert.equal(calculateNumber('SUM', 2, 6), 8);
            assert.equal(calculateNumber('SUM', 1, 2), 3);
        });
        it('should return the rounded sum of a positive integer and a float number', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
            assert.strictEqual(calculateNumber('SUM', 1, 2.6), 4);
        }); 
    });
    describe('SUB', () => {
        it('should return the rouded subtraction of two numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 1.9), 0);
            assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.2), 2);
            assert.strictEqual(calculateNumber('SUBTRACT', 2.6, 1.9), 1);
        });
        it('should correctly subtract two positive integer numbers', () => {
            assert.equal(calculateNumber("SUBTRACT", 4, 3), 1);
        });
        it('should return the rounded sub of a positive integer and a float', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.2), 2);
            assert.strictEqual(calculateNumber('SUBTRACT', 4, 1.2), 3);
        });
        it('should return the rounded sub of a negative number', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 1.9), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 2.6, -1.9), 5);
        });
    });
    describe('DIVIDE', () => {
        it('should return the rouded division of a negative number', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 8.0, -2.0), -4);
            assert.strictEqual(calculateNumber('DIVIDE', 9.0, -2.0), -4.5);
            assert.strictEqual(calculateNumber('DIVIDE', -8.0, -2.0), 4);
        });
        it('should correctly divide two positive integer numbers', () => {
            assert.equal(calculateNumber("DIVIDE", 10.0, 2.0), 5);
        });
        it('should return the rounded div of 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -2.0, 0), "Error");
            assert.strictEqual(calculateNumber('DIVIDE', 2.0, 0), "Error");
        });
    });
});