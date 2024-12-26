import { expect, Page } from "@playwright/test";
import fileOperations from "../utility/fileOperations";
class LoginPage {

    constructor(readonly page: Page) { }
    private getDisplayDashboard() { return this.page.locator(`//h5`) };
    private getUsernameText() { return this.page.locator(`//div[@id='app']//div[contains(@class, 'credentials')]/p[1]`).textContent() };
    private getPasswordText() { return this.page.locator(`//div[@id='app']//div[contains(@class, 'credentials')]/p[2]`).textContent() };

    private async openApplication(url: string) {
        await this.page.goto(url);
        await expect(this.getDisplayDashboard()).toBeVisible();
    }

    private async captureUsernameAndPassword(): Promise<{ username: string, password: string }> {
        const text1 = await this.getUsernameText()
        if (!text1) throw new Error('UserName is not found');
        const username = text1.split(' : ')[1]

        const text2 = await this.getPasswordText()
        if (!text2) throw new Error('Password is not found');
        const password = text2.split(' : ')[1]

        fileOperations.writeContentOnDotENVfile(username, password);

        return { username: username, password: password };
    }

    async signIntoLoginPage(credentials: { url: string }) {
        await this.openApplication(credentials.url);
        await this.captureUsernameAndPassword();
    }
}
export default LoginPage;