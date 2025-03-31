type newFixture = {
    raj: string;
    vinit: string
}
import { test as base } from '@playwright/test';
const test = base.extend<newFixture>({
    raj: async ({ }, use) => { await use('Hello raj') },
    vinit: async ({ }, use) => { await use('Hello Vinit') }
})

test('test fixture', async ({ raj }) => {
    console.log(raj);


})