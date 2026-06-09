import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:3000';

test.describe('App e2e', () => {
  test('login success', async ({ page }) => {
    await page.goto(BASE);

  await page.fill('input[placeholder="Email"]', 'test@test.com');
  await page.fill('input[placeholder="Password"]', '1234');
  await page.click('button.login-button');

  await expect(page).toHaveURL(BASE + '/dashboard');
    await expect(page.locator('text=Welcome to the dashboard!')).toBeVisible();
  });

  test('login validation empty fields', async ({ page }) => {
  await page.goto(BASE);
  await page.click('button.login-button');
  await expect(page.locator('.login-error')).toHaveText('All fields required');
  });

  test('login invalid credentials', async ({ page }) => {
  await page.goto(BASE);
  await page.fill('input[placeholder="Email"]', 'bad@test.com');
  await page.fill('input[placeholder="Password"]', 'wrong');
  await page.click('button.login-button');
  await expect(page.locator('.login-error')).toHaveText('Invalid credentials');
  });

  test('modal opens and closes', async ({ page }) => {
    await page.goto(BASE + '/dashboard');
    await page.click('text=Open Modal');
    await expect(page.locator('role=dialog')).toBeVisible();
    await page.click('button:has-text("Close")');
    await expect(page.locator('role=dialog')).toHaveCount(0);
  });

  test('users table sorts by name', async ({ page }) => {
    // intercept users API with a deterministic set for the test
    await page.route('https://jsonplaceholder.typicode.com/users', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          { id: 1, name: 'Zack', email: 'z@example.com' },
          { id: 2, name: 'Anna', email: 'a@example.com' },
        ]),
      });
    });

    await page.goto(BASE + '/users');
    await expect(page.locator('text=Zack')).toBeVisible();
    await page.click('text=Sort by Name');
    const firstRow = await page.locator('.users-table tbody tr').first();
    await expect(firstRow.locator('td').first()).toHaveText('Anna');
  });
});
