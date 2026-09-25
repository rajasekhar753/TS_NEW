import { test, expect } from '@playwright/test';
import { basePage } from '../pages/base-page';

test('Login Page Test1 ', async ({ page }) => {
    const loginPage = new basePage(page);
    await loginPage.goto();
   await page.waitForTimeout(2000);
    
});

test('lockedoutuser', async ({ page }) => {
    const lockpage = new basePage(page);
    await lockpage.lockedoutuser();
   await page.waitForTimeout(2000);
    
}); 