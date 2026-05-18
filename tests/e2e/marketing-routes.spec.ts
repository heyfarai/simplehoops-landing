import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/teams',
  '/tournaments',
  '/privacy',
  '/terms',
  '/support',
  '/thank-you',
];

for (const url of ROUTES) {
  test(`${url} returns 200 and renders site content`, async ({ page, request }) => {
    const res = await request.get(url);
    expect(res.status()).toBe(200);
    await page.goto(url);
    await expect(page.locator('body')).toContainText(/shuuk/i);
  });
}
