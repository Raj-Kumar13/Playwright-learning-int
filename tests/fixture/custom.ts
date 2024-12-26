import LoginPage from "../pages/loginPage";
import {test as base } from '@playwright/test';

interface applicationPages{
    loginPage: LoginPage;
}

export const test = base.extend<applicationPages>({
    loginPage:async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage); 
    }

})