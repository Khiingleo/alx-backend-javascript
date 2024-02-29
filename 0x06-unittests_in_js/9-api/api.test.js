const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('Correct status code and response?', (done) => {
        request('http://localhost:7865/', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        });
    });
    it('Response message for valid :id', (done) => {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });
    it ('Correct status code when :id is not a number', (done) => {
        request('http://localhost:7865/cart/hello', (error, response) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});