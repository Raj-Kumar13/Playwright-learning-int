//https://letcode.in/

import test, { chromium, expect } from "playwright/test";

test.describe.skip('Automate letCode site', () => {
    test('test features in letCode', async () => {
        // const browser = await chromium.launch();
        // const context = await browser.newContext();
        // const page = await context.newPage()

        // await page.goto('https://letcode.in/'); // landing to letCodePage

        // //by exact text match
        // const displayText = page.locator(':text-is(" LetCode with Koushik")') // finding exact text using CSS locator
        // await expect(displayText).toBeVisible();
        // //await expect(displayText).toBeDisabled();

        // //by ID
        // const workSpaceText = page.locator('#testing'); // find by Id using Css locator
        // await workSpaceText.click()
        // await expect(page.url()).toContain('/test');

        // //by Class value
        // const editText = page.locator('a[class=card-footer-item][href="/edit"]');
        // await editText.click();
        // const displayInputText = page.locator('//h1[normalize-space(text())="Input"]');
        // await expect(displayInputText).toHaveText('Input')

        // //User Facing Locators
        // await page.getByRole('textbox', { name: 'Enter first & last name' }).first().click()
        // await page.getByRole('textbox', { name: 'Enter first & last name' }).first().fill('Rajkumar');

        // await page.locator('//label[normalize-space(text())="Append a text and press keyboard tab"]/following-sibling::*/input').clear()
        // await page.locator('//label[normalize-space(text())="Append a text and press keyboard tab"]/following-sibling::*/input').fill('Append a text and press keyboard tab')

        // //Re-Use Locator
        // await page.locator('.card').getByRole('textbox', { name: 'Enter first & last name' }).click()
        // await page.locator('.card').getByRole('textbox', { name: 'Enter first & last name' }).fill('K. Raj Kumar')

        // //Extract Value from DOM getText from DOM 
        // const extractedText = await page.locator('.card').getByPlaceholder('Enter').last();
        // //console.log(extractedText);
        // await expect(extractedText).toBeDisabled()

        // await page.goBack();
        // await page.getByText('Work-Space').click();
        // expect(page.url()).toContain('/test');
        // await page.locator("//a[normalize-space(text())='Drop-Down']").click()
        // await expect(page.locator("//h1[normalize-space(text())='Dropdown']")).toContainText('Dropdown')

        // //Persistence - interview question
        // const dropDownValues = await page.locator('#fruits').allInnerTexts();
        // const value = dropDownValues[0].split('\n')
        // const expectedValues = ['Select Fruit', 'Apple', 'Mango', 'Orange', 'Banana', 'Pine Apple']
        // for (let i = 0; i < value.length; i++) {
        //     await expect(value[i]).toContain(expectedValues[i]);
        // }


        const browser1 = await chromium.launch();
        const context1 = await browser1.newContext()
        const page1 = await context1.newPage()

        await page1.goto('http://uitestingplayground.com/ajax')

        await page1.waitForLoadState('networkidle');

        const button = page1.locator('#ajaxButton')
        await button.click();

        const successResponse = await page1.getByText('Data loaded with AJAX get request.').textContent();
        console.log(successResponse);
        expect(successResponse).toEqual('Data loaded with AJAX get request.');

        const successResponse1 = await page1.getByText('Data loaded with AJAX get request.').allTextContents();
        console.log(successResponse1);
        expect(successResponse1).toContain('Data loaded with AJAX get request.');

        const successResponse2 = await page1.getByText('Data loaded with AJAX get request.').allInnerTexts();
        console.log(successResponse2);
        expect(successResponse2).toContain('Data loaded with AJAX get request.');







    })
})