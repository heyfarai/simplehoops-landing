import { test, expect } from '@playwright/test';

test('/jam loads and renders event identity', async ({ page }) => {
  await page.goto('/jam');
  await expect(page).toHaveTitle(/SHUUK.*3x3 JAM/i);
  await expect(page.locator('#div')).toBeVisible();
  await expect(page.locator('#schedule')).toBeVisible();
  await expect(page.locator('#venue')).toBeVisible();
  await expect(page.locator('#waitlist')).toBeVisible();
  await expect(page.locator('img[alt="shuuk! 3x3 jam"]').first()).toBeVisible();
});

test('/jam waitlist form submits and opens modal', async ({ page }) => {
  await page.goto('/jam#waitlist');
  await page.getByLabel(/team name/i).fill('Test Hoops');
  await page.getByLabel(/division/i).selectOption('U14');
  await page.getByLabel(/contact name/i).fill('Test Coach');
  await page.getByLabel(/email address/i).fill('test@example.com');
  await page.getByRole('button', { name: /reserve our spot/i }).click();
  await expect(page.getByRole('dialog')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByRole('dialog')).toContainText('Test Hoops');
});
