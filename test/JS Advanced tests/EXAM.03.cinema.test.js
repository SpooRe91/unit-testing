const { expect, assert } = require('chai');
const cinema = require('../JS Advanced tests/EXAM.03.cinema.js');

describe('showMovies', () => {

    describe('Testing the input length', () => {


        it('Should return: There are currently no movies to show.', () => {
            let arr = [];
            expect(cinema.showMovies(arr)).to.equal('There are currently no movies to show.');
        });
        it('Should return an array of available movies', () => {
            let input = ['string1', 'string2']
            expect(cinema.showMovies(input)).to.equal('string1, string2');
        });
        it('Should return an array of available movies', () => {
            let input = ['string1', 'string2', 'string3']
            expect(cinema.showMovies(input)).to.equal('string1, string2, string3');
        });
    });

    describe('ticketPrice', () => {

        it('should check if the current projection type IS Premiere', () => {
            assert.equal(cinema.ticketPrice('Premiere'), '12.00');
        });
        it('should check if the current projection type IS  Normal', () => {
            assert.equal(cinema.ticketPrice('Normal'), '7.50');
        });
        it('should check if the current projection type IS Discount', () => {
            assert.equal(cinema.ticketPrice('Discount'), '5.50');
        });
        it('should check if the current projection type is NOT present', () => {
            expect(() => cinema.ticketPrice('ani')).to.throw('Invalid projection type.');
        });
    });
    describe('swapSeatsInHall', function () {

        it('if valid nums', () => {
            assert.equal(cinema.swapSeatsInHall(3, 6), ('Successful change of seats in the hall.'));
        });
        it('if valid nums 2', () => {
            assert.equal(cinema.swapSeatsInHall(7, 13), ('Successful change of seats in the hall.'));
        });
        it('if 1st reaches 20', () => {
            assert.equal(cinema.swapSeatsInHall(7, 20), ('Successful change of seats in the hall.'));
        });
        it('if second reaches 20', () => {
            assert.equal(cinema.swapSeatsInHall(20, 5), ('Successful change of seats in the hall.'));
        });
        it('if both are 0', () => {
            assert.equal(cinema.swapSeatsInHall(0, 5), ('Unsuccessful change of seats in the hall.'));
        });
        it('if both are 0', () => {
            assert.equal(cinema.swapSeatsInHall(5, 0), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 1st is not num', () => {
            assert.equal(cinema.swapSeatsInHall({ 'peshko': 0 }, 13), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 2nd is not num', () => {
            assert.equal(cinema.swapSeatsInHall(13, 'film'), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 1st is below 0', () => {
            assert.equal(cinema.swapSeatsInHall(-7, 6), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 2nd is below 0', () => {
            assert.equal(cinema.swapSeatsInHall(7, -13), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 2nd is above 20', () => {
            assert.equal(cinema.swapSeatsInHall(7, 28), ('Unsuccessful change of seats in the hall.'));
        });
        it('if 1st is above 20', () => {
            assert.equal(cinema.swapSeatsInHall(28, 5), ('Unsuccessful change of seats in the hall.'));
        });
        it('if both are equal', () => {
            assert.equal(cinema.swapSeatsInHall(5, 5), ('Unsuccessful change of seats in the hall.'));
        });
        it('if both are equal', () => {
            assert.equal(cinema.swapSeatsInHall(34, 56), ('Unsuccessful change of seats in the hall.'));
        });
    });
});