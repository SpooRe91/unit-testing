const { expect, assert } = require('chai');
const companyAdministration = require('../EXAM.03.companyAdministration');
const dealership = require('../EXAM.03.companyAdministration');

describe('Testing compnayAdministration', () => {

    describe('testing the hiringEmployee function', () => {

        it('should check the position to be "Programmer"', () => {
            expect(() => companyAdministration.hiringEmployee('someone', 'position', 3)).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('someone', 'programmer', 3)).to.throw('We are not looking for workers for this position.');
        })
        it('should approve with message if years experience are >=3', () => {

            expect(companyAdministration.hiringEmployee('some', 'Programmer', 3)).to.equal(`some was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('person', 'Programmer', 4)).to.equal(`person was successfully hired for the position Programmer.`)
            expect(companyAdministration.hiringEmployee('person1', 'Programmer', 3.1)).to.equal(`person1 was successfully hired for the position Programmer.`)
        })
        it('should approve with message if years experience are <3', () => {

            expect(companyAdministration.hiringEmployee('somePerson', 'Programmer', 1)).to.equal(`somePerson is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('person', 'Programmer', 0)).to.equal(`person is not approved for this position.`)
            expect(companyAdministration.hiringEmployee('person1', 'Programmer', 2)).to.equal(`person1 is not approved for this position.`)
        })
    });
    describe('Testing calculateSalary func', () => {

        it('should throw an error if hours are not number or are less than 0', () => {
            expect(() => companyAdministration.calculateSalary('string')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-2)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([-2])).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary("-2")).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(false)).to.throw('Invalid hours');

        });
        it('return the total amount of hours if hours <= 160', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(100)).to.equal(1500);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(150.5)).to.equal(2257.5);
        })
        it('return the total amount of hours > 160', () => {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
            expect(companyAdministration.calculateSalary(200.5)).to.equal(4007.5);
        });
    });
    describe('Testing firedEmployee function', () => {

        it('should throw an error if the array is invalid', () => {
            expect(() => companyAdministration.firedEmployee({}, 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('', 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(42, 4)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(NaN, 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(false, 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('das', 0)).to.throw('Invalid input');

        });
        it('should throw an error if index is invalid', () => {
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 0.3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 1.6)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], -2.2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['a', 'b', 'c'], 4)).to.throw('Invalid input');
        })
        it('shpuld return an array of non-fired employees', () => {

            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 0)).to.equal('b, c');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 1)).to.equal('a, c');
            expect(companyAdministration.firedEmployee(['a', 'b', 'c'], 2)).to.equal('a, b');
        })
    })
})
//pastebin https://pastebin.com/qiC9LT2k
//time +-45 min