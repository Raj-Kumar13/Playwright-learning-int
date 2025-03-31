import { Page } from "playwright";

export class MenuPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    // async selectMenu(label: string) {
    //     const menuItems = this.page.locator(`//span[normalize-space(text())='Women']/parent::*/following-sibling::ul`);
    //     const isExpandedSubMenu = await menuItems.getAttribute('aria-expanded')
    //     if (isExpandedSubMenu === 'false') await menuItems.hover({ 'force': true })
    // }

    async selectMenu(label: string) {
        // Locate the menu item (e.g., "Women")
        const menuItem = this.page.locator(`//span[normalize-space(text())='${label}']`);
        const menuItems = this.page.locator(`//span[normalize-space(text())='${label}']/parent::*/following-sibling::ul`);

        // Ensure the menu item is visible before interacting
        await menuItem.waitFor({ state: 'visible' });

        // Hover over the menu item to trigger submenu
        await menuItem.hover();

        // Wait for submenu to become visible
        await menuItems.waitFor({ state: 'visible', timeout: 3000 });

        // Check if submenu is expanded
        const isExpandedSubMenu = await menuItems.getAttribute('aria-expanded');

        // Additional hover if needed
        if (isExpandedSubMenu === 'false') {
            await menuItems.hover();
        }
    }

}