const { chromium } = require('playwright-chromium');
const { assert } = require('chai');
let browser, page;
let baseUrl = 'http://127.0.0.1:5500/02.Book-Library/index.html';

//PLEASE MAKE SURE YOU RESTART THE SERVER BEFORE RUNNING THE TEST AGAIN!!!

describe('Testing end to end', function () {
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch({ headless: true, slowMo: 500 });
    });
    after(async () => {
        await browser.close();
    });
    beforeEach(async () => {
        page = await browser.newPage();
    });
    afterEach(async () => {
        await page.close();
    });
    //HERE WE CHECK IF THE BOOKS ARE LOADED SUCCESSFULLY!
    it('Should load succsessfully', async () => {
        await page.goto(baseUrl);

        await page.click('text=LOAD ALL BOOKS');

        let content = await page.content();
        const bookName1 = await page.textContent('table tbody tr:nth-child(1) td:nth-child(1)');
        const author1 = await page.textContent('table tbody tr:nth-child(1) td:nth-child(2)');
        const bookName2 = await page.textContent('table tbody tr:nth-child(2) td:nth-child(1)');
        const author2 = await page.textContent('table tbody tr:nth-child(2) td:nth-child(2)');

        assert.equal(bookName1, "Harry Potter and the Philosopher's Stone");
        assert.equal(author1, "J.K.Rowling");
        assert.equal(bookName2, "C# Fundamentals");
        assert.equal(author2, "Svetlin Nakov");
        assert.include(content, 'Edit');
        assert.include(content, 'Delete');
    });
    //HERE WE CHCEK IF WE CAN SUBMIT A NEW BOOK SUCCESSFULLY
    it('Should submit successfully', async () => {
        await page.goto(baseUrl);

        await page.fill('[placeholder="Title..."]', 'Witcher');
        await page.fill('[placeholder="Author..."]', 'Andrej Sapkowski');

        await page.click('text=Submit');
        await page.click('text=LOAD ALL BOOKS');

        const bookName = await page.textContent('tbody tr:nth-child(3) :nth-child(1)');
        const authorName = await page.textContent('tbody tr:nth-child(3) :nth-child(2)');

        assert.equal(bookName, 'Witcher');
        assert.equal(authorName, 'Andrej Sapkowski');
    });
    //HERE WE CHCEK IF WE CAN EDIT A BOOK SUCCESSFULLY
    it('Should edit properly', async () => {
        await page.goto(baseUrl);

        await page.click('text=LOAD ALL BOOKS');
        await page.locator('table tbody tr:nth-child(2) td:nth-child(3) .editBtn').click();

        await page.fill('text=Edit FORM TITLE AUTHOR Save >> [placeholder="Title..."]', 'C# Web');
        await page.click('text=Save');

        await page.click('text=LOAD ALL BOOKS');

        const bookName = await page.textContent('tbody tr:nth-child(2) :nth-child(1)');
        const authorName = await page.textContent('tbody tr:nth-child(2) :nth-child(2)');

        assert.equal(bookName, 'C# Web');
        assert.equal(authorName, 'Svetlin Nakov');
    });
    //HERE WE CHCEK IF WE CAN DELETE A BOOK SUCCESSFULLY
    it('Should delete a book', async () => {
        await page.goto(baseUrl);
        await page.click('text=LOAD ALL BOOKS');

        // This passes the confirmation of the delete operation
        page.on('dialog', (dialog) => {
            dialog.accept();
        });

        await page.click('tbody tr:last-child .deleteBtn');
        await page.click('text=LOAD ALL BOOKS');

        let location = await page.locator('tbody tr td:nth-child(1)');  // Gets all titles
        const titles = await location.evaluateAll((section) => section.map(s => s.textContent.trim()));

        assert.equal(titles.length - 1, titles.length - 1);
    });
});