import test, { chromium, expect, selectors } from "playwright/test";

test('test TO-DO MVC', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://todomvc.com/examples/react/dist/');
    // await page.pause();

    //getByPlaceholder()
    const content = 'Subscribe';
    const getInputLocator = await page.getByPlaceholder('What needs to be done?', { exact: true })
    await getInputLocator.fill(content);
    await getInputLocator.press('Enter');

    await expect(page.locator(`//label[normalize-space(text())='${content}']`)).toHaveText(content);
    //getByText()
    await expect(page.getByText(content)).toBeVisible();
    await expect(page.locator(`text=${content}`)).toBeVisible();

    //getByTestId();
    // await selectors.setTestIdAttribute('data-reactid');
    // await page.getByTestId('.0.0.1').fill('Have u subscribed yet?')
    // await getInputLocator.fill(content);

    await page.goto('https://www.google.com');
    await page.pause()

    //getByAltText()
    await expect(page.getByAltText('Google')).toBeVisible()
    //getByTitle()
    await page.getByTitle('Search').fill('LinkedIn')
    //getByRole()
    await page.getByRole('button', { name: 'Google Search' }).click()
    //other way to use Role
    //await page.getByRole('link', { name: 'हिन्दी' }).click()
    //await page.waitForLoadState('networkidle')
})

test('test Multiple Element on WebPage', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.heroku.com/')
    const headerText = page.$(`//h1[normalize-space(text())='Heroku is for Students']`);
    await expect(headerText).toContain('Heroku is for Students')
})

test('test - Drop Down', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.commitquality.com/practice');
    await page.locator('.container-text').filter({ hasText: 'Drag and drop' }).click()
    await expect(page.locator('.small-box')).toHaveText('Drag me!')

    await page.locator('.small-box').dragTo(page.locator("//div[normalize-space(text())='Drag the small box here.']"))
    await expect(page.locator(':text-is("Success!")')).toContainText('Success')
    //await page.pause();

    //------------------------ File Upload--------------------------
    await page.getByText('back to practice').click()
    await page.locator('.container-text').filter({ hasText: 'File Upload' }).click()
    const fileSpaceLocator = await page.locator('#file-input')
    await fileSpaceLocator.setInputFiles(['D:/Playwright-learning/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg']);
    await page.pause()
    page.once("dialog", (dialog) => {

        console.log(dialog.message())
        dialog.accept();
        //dialog.defaultValue()
    })

    await page.getByText('Submit').click();

    //--------------------- IFrames----------------------

    await page.getByText('back to practice').click()
    //await page.locator('.container-text').filter({ hasText: 'Iframes'.first().click()
    const framesLocator1 = await page.frameLocator('.container');
    await framesLocator1.getByPlaceholder('Filter by product name').fill('Raj...')




})

