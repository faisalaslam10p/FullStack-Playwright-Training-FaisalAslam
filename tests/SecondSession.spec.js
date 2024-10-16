const{test,expect}=require('@playwright/test');

test("Second Test", async({page})=>{

    await page.goto("https://www.saucedemo.com");
    //await page.getByPlaceholder("input_error form_input");
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();
    console.log ('User is logged in.');
    await expect (page).toHaveTitle('Swag Labs');

});
