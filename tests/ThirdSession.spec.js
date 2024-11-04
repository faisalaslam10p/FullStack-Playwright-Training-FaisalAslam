const {test, expect} = require ('@playwright/test');
const { Console, log } = require ('console');
const { SignupPageClass } = require  ('../pages/SignupPageClass.js');
const { loginPageClass } = require('../pages/LoginPageClass.js');
//const { removeproductfromcartPageClass } = require ('../pages/removeproductfromcartPageClass.js');
//const exp = require('constants');



    test('Verify that user can successfully login to the website', async ({page})=> {
        const visitpageobj = new SignupPageClass(page);
        var [username, password] = await visitpageobj.generaterandomstring();

        await visitpageobj.visitwebsite();
        //await expect(visitpageobj.ClickonSignupbuttontext).toBeVisible();
        await visitpageobj.signuponwebsite(username,password);
        const loginpageobj = new loginPageClass(page);
        await loginpageobj.Loginonwebsite(username,password);
        await page.waitForTimeout(10000);
        // await expect(visitpageobj.assertionlogin).toBeVisible();
        // await visitpageobj.AddtoCartonwbesite();
        // await expect(visitpageobj.assertaddtocart2).toBeVisible();
        // await visitpageobj.deletefromaddtocart();
    });
