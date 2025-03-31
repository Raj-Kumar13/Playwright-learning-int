import { Page } from '@playwright/test'
export class BasePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async hoverOnMenuItems(item: string) {

        const itemLocator = await this.page.getByRole('menuitem', { name: item })
        // if (await itemLocator.count() > 0) {
        //     await itemLocator.waitFor({ state: 'visible' });
        // } else {
        //     console.error("Element not found: Order Sent button");
        // }
        //await itemLocator.waitFor({ state: 'attached', timeout: 5000 })
        await itemLocator.hover({ 'force': true })
    }
    async clickOnMenuItems(item: string) {

        const itemLocator = await this.page.getByRole('menuitem', { name: item })
        await itemLocator.waitFor({ state: 'attached', timeout: 5000 })
        await itemLocator.click({ 'force': true })
    }
}