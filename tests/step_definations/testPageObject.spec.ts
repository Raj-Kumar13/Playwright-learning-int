import test, { chromium } from '@playwright/test'
import { MenuPage } from '../page-objects/menuPage';
import { BasePage } from '../page-objects/basePage';
test.describe('Test Application', () => {
    test.beforeEach(async ({ page }) => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage();
        await page.goto('https://magento.softwaretestingboard.com/')
    })
    test('Test Scenario', async ({ page }) => {
        // const menuPage = new MenuPage(page);
        // await menuPage.selectMenu('Women');
        // const menu = await page.getByRole('menuitem', { name: 'Women' })
        // await menu.hover({ force: true });
        // const subMenu = await page.getByRole('menuitem', { name: 'Top' })
        // await subMenu.hover({ 'force': true });
        // const nestedMenu = await page.getByRole('menuitem', { name: `Hoodies & Sweatshirts` })
        // await nestedMenu.click({ force: true });


        const basePage = new BasePage(page);
        await basePage.hoverOnMenuItems('Men')
        await basePage.hoverOnMenuItems('bottoms')
    })
})