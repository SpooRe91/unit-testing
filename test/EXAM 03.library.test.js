const { expect, assert } = require('chai');
const library = require('../EXAM 03.library');

describe("Test", () => {
    describe("A function that accepts a string and a number: ", () => {
        it("Checks if the first parameter is not a string", () => {

            assert.throws(function () { library.calcPriceOfBook(2000, 1) }, Error, "Invalid input")
            assert.throws(function () { library.calcPriceOfBook([], 1) }, Error, "Invalid input")
            assert.throws(function () { library.calcPriceOfBook({}, 1) }, Error, "Invalid input")


        });
        it("Checks if the second parameter is not a number", () => {
            assert.throw(function () { library.calcPriceOfBook("Titanic", "string") }, Error, "Invalid input")
            assert.throw(function () { library.calcPriceOfBook("Matrix", {}) }, Error, "Invalid input")
            assert.throw(function () { library.calcPriceOfBook("Superman", []) }, Error, "Invalid input")

        });
        it("Checks if the year is less than 1980 or equal to 1980", () => {
            let book = library.calcPriceOfBook("Name", 1979)
            let book2 = library.calcPriceOfBook("Name2", 1980)
            assert.equal(book, `Price of Name is 10.00`)
            assert.equal(book2, `Price of Name2 is 10.00`)
        });
        it("Checks if the year is bigger than 1980", () => {
            let book = library.calcPriceOfBook("Name", 1981)
            assert.equal(book, "Price of Name is 20.00")
        });

    });
    describe("A function that accepts an array and string:", () => {
        it("Checks if the array`s length is equal to 0 ", () => {
            let arrayOfBooks = [];
            let desiredBook = "Troy";
            assert.throws(function () { library.findBook(arrayOfBooks, desiredBook) }, Error, "No books currently available")

        });
        it("Checks if the given book is included in the array of books", () => {
            let arrayOfBooks = ["Troy", "The Avangers", "Man in black"];
            let desiredBook = "Troy";
            assert.equal(library.findBook(arrayOfBooks, desiredBook), "We found the book you want.");
        });
        it("Checks if the given book is not included in the array of books", () => {
            let arrayOfBooks = ["Troy", "The Avangers", "Man in black"];
            let desiredBook = "Troy 2";
            assert.equal(library.findBook(arrayOfBooks, desiredBook), "The book you are looking for is not here!");
        });


    });
    describe("A function accept a number:", () => {
        it("Checks if the input is a positive integer number", () => {
            assert.throw(function () { library.arrangeTheBooks("string") }, Error, "Invalid input")
            assert.throw(function () { library.calcPriceOfBook({}) }, Error, "Invalid input")
            assert.throw(function () { library.calcPriceOfBook([]) }, Error, "Invalid input")
            assert.throw(function () { library.arrangeTheBooks(-1) }, Error, "Invalid input")
            assert.throw(function () { library.arrangeTheBooks(1.5) }, Error, "Invalid input")
        });
        it(`Cheks if books are arranged`, () => {
            let countBooks = 40;
            expect(library.arrangeTheBooks(countBooks)).to.equal("Great job, the books are arranged.")
        });
        it("Cheks if there is more space on the shelves", () => {
            let countBooks = 20;
            expect(library.arrangeTheBooks(countBooks)).to.equal("Great job, the books are arranged.")
        })

        it(`Cheks if books are not arranged`, () => {
            let countBooks = 41;
            expect(library.arrangeTheBooks(countBooks)).to.equal("Insufficient space, more shelves need to be purchased.")
        });

    });
})