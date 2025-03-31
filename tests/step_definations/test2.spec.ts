import test, { chromium, request } from '@playwright/test'

test.describe('testing feature', () => {
    test('test a google feature', async () => {

        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage()

        await page.goto('https://www.google.com/');
        await page.locator("//textarea[@name='q']").click();
        await page.locator("//textarea[@name='q']").fill('playwright Docs');
        await page.locator("//input[@role='button']").first().click()
        await page.waitForSelector('.LC20lb.MBeuO.DKV0Md', { state: 'visible' })
        await page.screenshot({ 'path': 'fullpage.png', fullPage: true })
        await page.locator('.LC20lb.MBeuO.DKV0Md').first().click()

        // const dropdownvalue = await page.locator('#').allInnerTexts()
        // const actualvalue: [] = dropdownvalue[0].split('\n')
        // const expectedvalue = [];
        // for (let i = 0; i < actualvalue.length; i++) {
        //     await expect(actualvale[i]).toContain(expectedvalue[i])
        // }


    })



    const putHttpCall = async (payload: object, url: string) => {
        const apiContext = await request.newContext();
        const response = await apiContext.put(url, {
            'ignoreHTTPSErrors': true,
            'headers': {
                'Authorization': 'token'
            },
            'data': payload
        })
        return response;
    }


    const putHttpCall1 = async (payload: object, url: string) => {
        const apiContext = await await request.newContext();
        const response = await apiContext.put(url, {
            'ignoreHTTPSErrors': true,
            'headers': {
                'Authorization': token
            },
            data: payload
        })
        return response 
    }
})