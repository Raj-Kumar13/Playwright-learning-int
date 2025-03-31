import { test } from '../fixture/custom'
import { LOCAL_ENV } from "../environments/manager";
import { chromium, Browser, BrowserContext } from 'playwright'

test.describe.skip('Test - Orange HRM portal', () => {
    test.skip('Login feature', async ({ loginPage }) => {
        await loginPage.signIntoLoginPage({ 'url': LOCAL_ENV.OrangePortal.APPLICATION_URL });
    });
    test.skip('Iframes ', async ({ page }) => {
        const browser: Browser = await chromium.launch({ headless: false });
        const context1: BrowserContext = await browser.newContext();

        const page1 = await context1.newPage();
        await page1.goto('https://www.commitquality.com/practice-iframe');
        const getFrameLocator = page1.frameLocator('[data-testid="iframe"]');

        await getFrameLocator.getByPlaceholder('Filter by product name').fill('subba rao..!!')
        await getFrameLocator.locator('[data-testid="filter-button"]').click();

    })

    test.skip('Learning Locator', async ({ page }) => {
        const browser = await chromium.launch();
        const context = await browser.newContext();


    })

});