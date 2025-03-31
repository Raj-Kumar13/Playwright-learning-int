import { chromium, expect, test } from '@playwright/test';

test.describe('test Scenario', () => {
    test.only('test Case', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();


        await page.goto('https://magento.softwaretestingboard.com/');
        await page.screenshot({ 'path': 'screenshots/screenshot1.png', fullPage: true })

        const [newPage] = await Promise.all([
            context.waitForEvent('page'), // Wait for new tab
            page.locator(`//span[normalize-space(text())='Women']`).click()
        ]);

        await newPage.waitForLoadState('domcontentloaded');
        await newPage.screenshot({ path: 'screenshots/newpage.png', fullPage: true });

        await browser.close();



        // const topsLocator = page.locator('#ui-id-9')
        // await topsLocator.waitFor({ state: 'visible', timeout: 5000 })
        // await topsLocator.hover()
        // const teesLocator = page.locator('#ui-id-13')
        // await teesLocator.waitFor({ state: 'visible', timeout: 5000 });
        // await teesLocator.click();
        // await page.waitForSelector('.page-title-wrapper', { state: 'visible' })
        // await expect(page.locator('.page-title-wrapper')).toHaveText('Tees')


    })
})