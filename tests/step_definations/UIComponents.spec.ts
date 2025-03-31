import { chromium } from "playwright";
import test, { expect, Page } from "@playwright/test";
import exp from "constants";

let page: Page;

test.describe('Test UI Components', () => {

    test.beforeEach(async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://letcode.in')

        const workSpaceNavBar = page.getByText('Work-Space')
        await workSpaceNavBar.click();
        expect(page.url).toContain('letcode.in')


        // await page.waitForSelector('//h1[normalize-space(text())="Practice and become pro in test automation"]')
        // const headerText = await page.locator('//h1[normalize-space(text())="Practice and become pro in test automation"]').textContent();
        // await expect(headerText?.trimStart()).toEqual('Practice and become pro in test automation')

        const headerLocator = page.locator('//h1[normalize-space(text())="Practice and become pro in test automation"]');
        // await headerLocator.waitFor();
        const headerText = await headerLocator.textContent();
        expect(headerText?.trim()).toEqual('Practice and become pro in test automation');
    });

    test('test- input fields', async () => {
        // await page.waitForLoadState('networkidle');

        const textInput = page.getByRole('link', { name: 'Edit' })
        await textInput.click()

        // await page.waitForSelector('//h1[normalize-space(text())="Input"]');
        // await expect(page.getByText(' Input')).toContainText('Input');

        const inputHeader = page.locator('//h1[normalize-space(text())="Input"]');
        //await inputHeader.waitFor();
        await expect(inputHeader).toContainText('Input');

        //Input field manipulations
        const getNameLocator = page.getByRole('textbox', { name: 'Enter first & last name' })
        await getNameLocator.clear()
        await getNameLocator.fill('K. Raj Kumar')
        expect(await getNameLocator.inputValue()).toEqual('K. Raj Kumar')
        await expect(getNameLocator).toHaveValue('K. Raj Kumar')

    })

    test('test- Radio Button', async () => {
        const textToggle = page.getByRole('link', { name: 'Toggle' })
        await textToggle.click()

        const inputHeader = page.locator('//h1[normalize-space(text())="Radio & Checkbox"]');
        await inputHeader.waitFor();
        await expect(inputHeader).toContainText(' Radio & Checkbox');

        const getNoRadioButtonLocator = page.locator('.card-content').filter({ 'hasText': 'Select any one' }).locator("//input[@id='no']");
        await getNoRadioButtonLocator.check({ force: true })
        //Generic Assertions
        expect(getNoRadioButtonLocator).toBeTruthy();
        //Locator Assertion
        await expect(getNoRadioButtonLocator).toBeChecked()

        //Other Way
        const getYesRadioButtonLocator = page.locator('.card-content').filter({ hasText: 'Select any one' }).locator("//input[@id='yes']");
        await getYesRadioButtonLocator.check({ force: true })
        await getYesRadioButtonLocator.waitFor();
        expect(await getYesRadioButtonLocator.isChecked()).toBeTruthy();
        expect(await getNoRadioButtonLocator.isChecked()).toBeFalsy();
    })

    test('test- CheckBoxes check and Uncheck', async () => {
        const testToggle = page.getByRole('link', { name: 'Toggle' })
        await testToggle.click()

        const radioHeader = page.locator('//h1[normalize-space(text())="Radio & Checkbox"]');
        await radioHeader.waitFor();
        await expect(radioHeader).toContainText(' Radio & Checkbox');

        const checkBox = await page.getByRole('checkbox', { name: ' Remember me ' });
        await checkBox.uncheck()
        await checkBox.waitFor()
        expect(await checkBox.isChecked()).toBeFalsy();

        const listOfCheckBoxes = await page.getByRole('checkbox');
        for (const checkBox of await listOfCheckBoxes.all()) {
            await checkBox.uncheck()
            expect(await checkBox.isChecked()).toBeFalsy()
        }
    })

    test('test- List and DropDown', async () => {
        const testDropDown = page.getByRole('link', { name: 'Drop-Down' })
        await testDropDown.click();

        const dropdownHeader = page.locator("//h1[normalize-space(text())='Dropdown']")
        await expect(dropdownHeader).toHaveText('Dropdown');

        const dropdownLocator = page.locator('#fruits')
        await dropdownLocator.click()
        //retrive all dropdown values and added a assertion on it 
        const dropdownList = await page.locator('#fruits').allInnerTexts();
        const listOfValues = dropdownList[0].split('\n')
        const listOfFruits = ['Select Fruit', 'Apple', 'Mango', 'Orange', 'Banana', 'Pine Apple'];
        for (const fruit of listOfFruits) { expect(listOfValues).toContain(fruit) }

        //select a specific value from dropdown list
        await page.locator('#fruits').selectOption({ label: 'Mango' })
        const selectedOption = await page.locator('#fruits option:checked').textContent();
        expect(selectedOption).toEqual('Mango')


    })

    test('test Drag and Drop and Iframes', async () => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage()

        await page.goto('https://www.globalsqa.com/demo-site/draganddrop/')

        const frame = page.frameLocator('[class="demo-frame lazyloaded"]')
        await frame.locator('li', { hasText: 'High Tatras' }).first().hover()
        await page.mouse.down()
        await frame.locator('#trash').hover()
        await page.mouse.up()
    })

});