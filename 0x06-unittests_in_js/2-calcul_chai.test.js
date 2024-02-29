const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function', function() {
    describe('SUM', () => {
        it('should return the rounded sum of two numbers', () => {
            expect(calculateNumber('SUM', 1.4, 2.5)).to.equal(4);
            expect(calculateNumber('SUM', 1.2, 2.7)).to.equal(4);
            expect(calculateNumber('SUM', 3.7, 4.3)).to.equal(8);
        });

        it('should correctly add two positive integer numbers', () => {
            expect(calculateNumber('SUM', 2, 6)).to.equal(8);
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        });

        it('should return the rounded sum of a positive integer and a float number', () => {
            expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
            expect(calculateNumber('SUM', 1, 2.6)).to.equal(4);
        });
    });

    describe('SUBTRACT', () => {
        it('should return the rounded subtraction of two numbers', () => {
            expect(calculateNumber('SUBTRACT', 2.0, 1.9)).to.equal(0);
            expect(calculateNumber('SUBTRACT', 2.6, 1.2)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 2.6, 1.9)).to.equal(1);
        });

        it('should correctly subtract two positive integer numbers', () => {
            expect(calculateNumber('SUBTRACT', 4, 3)).to.equal(1);
        });

        it('should return the rounded subtraction of a positive integer and a float', () => {
            expect(calculateNumber('SUBTRACT', 3, 1.2)).to.equal(2);
            expect(calculateNumber('SUBTRACT', 4, 1.2)).to.equal(3);
        });

        it('should return the rounded subtraction of negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -2.0, 1.9)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 2.6, -1.9)).to.equal(5);
        });
    });

    describe('DIVIDE', () => {
        it('should return the rounded division of negative numbers', () => {
            expect(calculateNumber('DIVIDE', 8.0, -2.0)).to.equal(-4);
            expect(calculateNumber('DIVIDE', 9.0, -2.0)).to.equal(-4.5);
            expect(calculateNumber('DIVIDE', -8.0, -2.0)).to.equal(4);
        });

        it('should correctly divide two positive integer numbers', () => {
            expect(calculateNumber('DIVIDE', 10.0, 2.0)).to.equal(5);
        });

        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', -2.0, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 2.0, 0)).to.equal('Error');
        });
    });
});