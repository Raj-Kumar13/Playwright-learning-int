import { test } from '../fixture/custom'
import { LOCAL_ENV } from "../environments/manager";

test.describe('Test - Orange HRM portal', () => {
    test('Login feature', async ({ loginPage }) => {
        await loginPage.signIntoLoginPage({ 'url': LOCAL_ENV.OrangePortal.APPLICATION_URL });
    });

});