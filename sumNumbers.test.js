let expect = require('chai').expect;
let sum = require('./sumNumbers.js');

describe('Sub - sum calculator', () => {
    it('It must be equal 17', () => {
        //Arrange
        let array = [3, 2, 5, 7];
        let expectedSum = 17;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
    it('It must be equal 10', () => {
        //Arrange
        let array = [3, 2, 2, 3];
        let expectedSum = 10;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });

    it('Input is an array', () => {
        //Arrange
        let array = 10
        let expectedSum = (!Array.isArray);
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
});