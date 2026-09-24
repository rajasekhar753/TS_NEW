import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page).toHaveTitle('Demo Web Shop');
  const title = await page.title();
  console.log(title);


});
test('register', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'register' }).click();
  await expect(page).toHaveTitle('Demo Web Shop. Register');

  const title = await page.title();
  console.log(title);
});