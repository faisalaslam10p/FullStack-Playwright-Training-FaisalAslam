
const{test,expect}=require('@playwright/test');

test('google', async ({ page }) => {
    await page.goto('https://google.com') ;
});
