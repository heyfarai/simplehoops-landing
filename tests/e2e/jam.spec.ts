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
  // fixed email so re-runs hit the idempotent "already_issued" path and don't
  // burn through the 20-code pool in local dev.
  await page.getByLabel(/email address/i).fill('e2e-formtest@example.com');
  // wait for Turnstile to actually resolve a token (always-pass key returns
  // one nearly instantly, but the React callback that sets form state has to
  // run too). poll window.turnstile.getResponse() — the documented public API.
  await page.waitForFunction(
    () => {
      const ts = (window as unknown as { turnstile?: { getResponse?: () => string | undefined } })
        .turnstile;
      const v = ts?.getResponse?.();
      return typeof v === 'string' && v.length > 0;
    },
    null,
    { timeout: 10_000 },
  );
  // small grace for React to flush the setToken state update before submit
  await page.waitForTimeout(150);
  await page.getByRole('button', { name: /join waitlist/i }).click();
  await expect(page.getByRole('dialog')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByRole('dialog')).toContainText('Test Hoops');
});
