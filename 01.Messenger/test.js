const { chromium } = require('playwright-chromium');
const { assert } = require('chai');
let browser, page;
let host = 'http://127.0.0.1:5500/01.Messenger/index.html';

function testResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
}

let messages = {
    1: {
        author: 'Martin',
        content: 'How are you'
    },
    2: {
        author: 'Pesho',
        content: 'Fine, thanks!'
    }
};

describe('Testing end to end', function () {
    this.timeout(4000);

    before(async () => {
        browser = await chromium.launch({ headless: true });
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
    //THIS TESTS THE REFRESH AND THE APPEARANCE OF MESSAGES
    it('Should refresh the section and check the messages', async () => {
        await page.goto(host);

        await page.route('**/jsonstore/messenger', route => {
            route.fulfill(testResponse(messages));
        });

        await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#refresh'),
        ]);

        let location = await page.locator('#messages');
        const currentMessages = await location.evaluate((textArea) => textArea.value);
        let testMessages = Object.values(messages).map(x => `${x.author}: ${x.content}`).join('\n');

        assert.deepEqual(currentMessages, testMessages);
    });
    //THIS TESTS THE SUCCESSFULL SENDING OF A MESSAGE
    it('Should successfully send a message', async () => {
        await page.goto(host);

        await page.route('**/jsonstore/messenger', (route) => {
            route.fulfill(testResponse({ author: 'Marto', content: 'Good to hear that!' }));
        });

        await page.fill('#author', 'Marto');
        await page.fill('#content', 'Good to hear that!');

        const [response] = await Promise.all([
            page.waitForResponse('**/jsonstore/messenger'),
            page.click('#submit'),
        ]);

        const data = JSON.parse(response.request().postData());

        assert.equal(data.author, 'Marto');
        assert.equal(data.content, 'Good to hear that!');
        assert.deepEqual(data, { 'author': 'Marto', 'content': 'Good to hear that!' });
    });
});