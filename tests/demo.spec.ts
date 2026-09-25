import{test,expect}from'@playwright/test';
import demodata from '../data/demodata.json';
test.skip('Verify the search functionality on H&M website',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator(".ico-register").click();
    await page.locator("#gender-female").check();
    await page.locator("#FirstName").fill(demodata[0].FirstName);
    await page.locator("#LastName").fill(demodata[0].LastName);
    await page.locator("#Email").fill(demodata[0].Email);
    await page.locator("#Password").fill(demodata[1].password);
    await page.locator("#ConfirmPassword").fill(demodata[1].confirmPassword);
    await page.locator("#register-button").click();
    await page.waitForTimeout(2000);


});
    test('login',async({page})=>{
        await page.goto('https://demowebshop.tricentis.com/');
        await page.locator(".ico-login").click();
        await page.locator("#Email").fill(demodata[0].Email);
        await page.locator("#Password").fill(demodata[1].password);
        await page.locator("input[value='Log in']").click();
        await page.waitForTimeout(2000);
    });
