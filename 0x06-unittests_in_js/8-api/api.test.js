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
});