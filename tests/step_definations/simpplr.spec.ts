import test, { chromium } from '@playwright/test'
test.describe('Test Feature', async () => {

    test('test Scenario', async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://magento.softwaretestingboard.com/')
        await page.waitForLoadState('networkidle')

        const womenLocator = await page.locator(`//a[@role='menuitem'][@aria-haspopup='true']/*/following-sibling::*[normalize-space(text())='Women']`);
        await womenLocator.waitFor({ 'state': 'attached' })
        await womenLocator.hover({ 'force': true });
        const topsLocator = await page.locator(`//a[@role='menuitem'][@aria-haspopup='true']/*/following-sibling::*[normalize-space(text())='Bottoms']`);




    })
})