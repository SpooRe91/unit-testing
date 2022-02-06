const { expect, assert } = require('chai');
const sum = require('../01.sumNumbers.js');

describe('Sub - sum calculator', () => {
    it('It must return the sum of the numbers in the array!', () => {
        //Arrange
        let array = [3, 2, 5, 7];
        let expectedSum = 17;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
    it('It must return the sum of the numbers in the array, including negative nums', () => {
        //Arrange
        let array = [3, 2, 2, -3];
        let expectedSum = 4;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
    it('It must return the sum of the numbers in the array, including negative nums', () => {
        //Arrange
        let array = [3, 2, 2, -3];
        let expectedSum = 4;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        expect(actualSum).to.equal(expectedSum, 'not equal');
    });
    it('Input is an array and is equal', () => {
        //Arrange
        let array = [10, 20, 30];
        let expectedSum = 60;
        //Act
        let actualSum = sum(array);
        //Assert or epext
        assert.equal(actualSum, expectedSum, 'equal');
    });
});


// });