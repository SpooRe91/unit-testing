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
});