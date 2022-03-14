const expect = require('chai').expect;
const isOddOrEven = require('../JS Advanced tests/02.evenOrOdd.js');

describe('isOddOrEven checks multiple things', () => {
    //arrange phase
    //expect and act phase
    it('should return undefined if parameter is not string', () => {
        expect(isOddOrEven({})).to.equal(undefined);
        expect(isOddOrEven([12, 3, 6])).to.equal(undefined);
        expect(isOddOrEven(5)).to.equal(undefined);
        expect(isOddOrEven(function () { })).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
        expect(isOddOrEven(false)).to.equal(undefined);
        expect(isOddOrEven(NaN)).to.equal(undefined);
    });
    it('should return even', () => {
        expect(isOddOrEven('Deni')).to.equal('even');
        expect(isOddOrEven('Pesh')).to.equal('even');
    });
    it('should return odd', () => {
        expect(isOddOrEven('Denic')).to.equal('odd');
        expect(isOddOrEven('Pesho')).to.equal('odd');
        expect(isOddOrEven('Vicko')).to.equal('odd');
    });
    it('Should return right result with multiple assertions', function () {
        expect(isOddOrEven('Chaika'), 'even');
        expect(isOddOrEven('Mochani'), 'odd');
    });
});