const { getFactorial, multiply } = require('./script9.2');
const chai = require('chai');
const mocha = require('mocha');

const describe = mocha.describe;
const it = mocha.it;
const expect = chai.expect;

describe('getFactorial', () => {
    it('should return the factorial of a number', () => {
        expect(getFactorial(5)).to.equal(120);
        expect(getFactorial('5')).to.equal(120);
    });

    it('should return "not a number" for non-numeric input', () => {
        expect(getFactorial('blabla')).to.equal('not a number');
    });
});

describe('multiply', () => {
    it('should multiply parameters using currying', () => {
        expect(multiply(2)(3)(10)()).to.equal(60);
        expect(multiply(-1)(677)(568)(2)()).to.equal(-769072);
        expect(multiply(3)()).to.equal(3);
    });
});
