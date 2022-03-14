const { chromium } = require('playwright-chromium');
const { assert } = require('chai');
let browser, page;
let baseUrl = ''//enter an URL
describe('Testing end to end', function () {
    this.timeout(6000);

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 500 });//headles if true = doesn't open browser runs in background/ if false = opens the browser//slow mo is to make it slower;
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
});
//WE PUT THIS EVERYTIME WE MAKE TESTS