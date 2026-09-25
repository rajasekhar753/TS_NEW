import{test,expect} from '@playwright/test';
import { basePage } from '../pages/base-page';
import sample from '../data/sample.json';
test('add to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await page.waitForTimeout(2000);
    await page.locator('#checkout').click();
    await page.waitForTimeout(2000);
    await page.locator('#first-name').fill('John'); 
    await page.locator('#last-name').fill('Doe');
    await page.locator('#postal-code').fill('12345');
    await page.locator('#continue').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await page.waitForTimeout(2000);
    await page.locator('#finish').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await page.waitForTimeout(2000);
    await page.locator('#back-to-products').click();
    await page.waitForTimeout(2000);
    await page.locator('#react-burger-menu-btn').click();   
    await page.locator('#logout_sidebar_link').click(); 
   const titel= await expect(page).toHaveURL('https://www.saucedemo.com/');
   await console.log('titel:', titel);



});