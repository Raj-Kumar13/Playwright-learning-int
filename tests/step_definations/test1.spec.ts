import test, { chromium } from 'playwright/test';

test.describe('Test Feature', () => {
    test('test senario', async () => {
        const context = await chromium.launch();
        const browser = await context.newContext();
        const page = await browser.newPage();

        await page.goto('https://todomvc.com/examples/react/dist/')
    })
})