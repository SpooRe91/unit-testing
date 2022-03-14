const { expect, assert } = require('chai');
const flowerShop = require('../JS Advanced tests/FINALEXAM.flowerShop.js');
const taskName = require('../JS Advanced tests/FINALEXAM.flowerShop.js');

describe('testing the functionality', () => {

    describe('testing the calcPriceOfFlowers function', () => {

        it('should throw an error if 1st arg is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers({}, 50, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 50, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(42, 50, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(false, 50, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 50, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(NaN, 50, 43)).to.throw('Invalid input!');
        });
        it('should throw an error if 2nd arg is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 1.2, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower2', -2.5, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower3', 3.3, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower4', 0.02, 43)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower5', 0.02, 43)).to.throw('Invalid input!');
        });
        it('should throw an error if 3rd arg is invalid', () => {
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 12, 1.2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 12, -2.5)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 12, 3.3)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 12, 0.02)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower1', 12, 0.03)).to.throw('Invalid input!');

        });
        it('should return a success result', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 5, 5)).to.equal('You need $25.00 to buy flower!')
            expect(flowerShop.calcPriceOfFlowers('flower1', 10, 5)).to.equal('You need $50.00 to buy flower1!')
            expect(flowerShop.calcPriceOfFlowers('flower2', 1, 2)).to.equal('You need $2.00 to buy flower2!')
        })
    })
    describe('checking the checkFlowersAvailable function', () => {

        it('should a positive message', () => {

            expect(flowerShop.checkFlowersAvailable('flower', ['flower', 'flower1', 'flower2'])).to.equal('The flower are available!');
            expect(flowerShop.checkFlowersAvailable('flower1', ['flower', 'flower1', 'flower2'])).to.equal('The flower1 are available!');
            expect(flowerShop.checkFlowersAvailable('flower2', ['flower', 'flower1', 'flower2'])).to.equal('The flower2 are available!');

        });

        it('should a negative message', () => {

            expect(flowerShop.checkFlowersAvailable('flowe4r', ['flower3', 'flower1', 'flower2'])).to.equal('The flowe4r are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('flower51', ['flower', 'flower3', 'flower2'])).to.equal('The flower51 are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('flower23', ['flower', 'flower1', 'flower3'])).to.equal('The flower23 are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('flower32', ['flower', 'flower1', 'flower3'])).to.equal('The flower32 are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('flower43', ['flower', 'flower1', 'flower3'])).to.equal('The flower43 are sold! You need to purchase more!');
        })
    })
    describe('tsting the sellFlowers function', () => {

        it('shoudl throw an error if arg1 is not valid', () => {

            expect(() => flowerShop.sellFlowers({}, 10)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers("string", 10)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(10, 10)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(NaN, 10)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(undefined, 10)).to.throw('Invalid input!');

        });
        it('shoudl throw an error if arg2 is not valid', () => {

            expect(() => flowerShop.sellFlowers([], 1.2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 2.3)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 3.4)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 4.5)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 5.6)).to.throw('Invalid input!');
        });

        it('shoudl throw an error if arg2 is < 0', () => {
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], -3)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], -34)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], -4)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], -5)).to.throw('Invalid input!');
        });
        it('shoudl throw an error if arg2 is >= arg1.length', () => {
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 4)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 5)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 6)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 7)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 8)).to.throw('Invalid input!');
        });

        it('should throw an error if both args are not valid', () => {

            expect(() => flowerShop.sellFlowers({}, 'string')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(50, {})).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('string', NaN)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(undefined, null)).to.throw('Invalid input!');

        });

        it('should return positive result if all args are valid', () => {

            expect(flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 0)).to.equal('flower1 / flower2')
            expect(flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 1)).to.equal('flower / flower2')
            expect(flowerShop.sellFlowers(['flower', 'flower1', 'flower2'], 2)).to.equal('flower / flower1')

        })
    })
})