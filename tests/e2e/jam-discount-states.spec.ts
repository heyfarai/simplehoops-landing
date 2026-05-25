import { test, expect, type Page } from '@playwright/test';
import {
  cleanJamSeed,
  jamSeedConfigured,
  seedJamRows,
} from './helpers/jam-seed';

// the page has `revalidate = 60`. in `next dev` (used when reusing a running
// dev server) every request is fresh, so seeding propagates instantly. in
// `next start` (the playwright-spawned production build) the page is rendered
// at request time and our `getJamWaitlistStatus()` is awaited fresh because
// the route is dynamic (it does runtime DB I/O) — so the next page navigation
// reflects the new seed. no explicit cache-bust needed.
async function gotoWaitlist(page: Page) {
  await page.goto('/jam#waitlist');
  // make sure the section that holds the state-driven copy is in view first
  await expect(page.locator('#waitlist')).toBeVisible();
}

test.describe('Jam waitlist · discount-code states', () => {
  test.describe('with juuk available', () => {
    // these three tests share juuk's person table — parallel execution races
    // (duplicate inserts, count drift). serialize within this describe.
    test.describe.configure({ mode: 'serial' });

    test.afterEach(async () => {
      await cleanJamSeed();
    });

    test('codes available · full inventory (0 issued) shows "20 discount codes available"', async ({
      page,
    }) => {
      test.skip(
        !jamSeedConfigured(),
        'requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (local dev only)',
      );
      await seedJamRows(0);
      await gotoWaitlist(page);

      await expect(
        page.getByRole('heading', { name: 'Join the Waitlist.' }),
      ).toBeVisible();
      // headline strapline carries the Save $25 promise + the count
      await expect(page.locator('#waitlist')).toContainText('Save $25.');
      await expect(page.locator('#waitlist')).toContainText(
        'Only 20 discount codes available',
      );
      // sold-out marker must NOT appear in this state
      await expect(page.locator('#waitlist')).not.toContainText('All gone!');
    });

    test('codes available · mid-campaign (3 issued) shows "Only 17 discount codes left"', async ({
      page,
    }) => {
      test.skip(
        !jamSeedConfigured(),
        'requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (local dev only)',
      );
      await seedJamRows(3);
      await gotoWaitlist(page);

      await expect(
        page.getByRole('heading', { name: 'Join the Waitlist.' }),
      ).toBeVisible();
      await expect(page.locator('#waitlist')).toContainText(
        'Only 17 discount codes left',
      );
      await expect(page.locator('#waitlist')).not.toContainText('available');
      await expect(page.locator('#waitlist')).not.toContainText('All gone!');
    });

    test('sold out (20 issued) shows strikethrough + "All gone!"', async ({
      page,
    }) => {
      test.skip(
        !jamSeedConfigured(),
        'requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (local dev only)',
      );
      await seedJamRows(20);
      await gotoWaitlist(page);

      await expect(
        page.getByRole('heading', { name: 'Join the Waitlist.' }),
      ).toBeVisible();
      await expect(page.locator('#waitlist')).toContainText('All gone!');
      // strikethrough lives on the "Only 20 discount codes" phrase
      const struck = page.locator('#waitlist').getByText(
        'Only 20 discount codes',
        { exact: false },
      );
      await expect(struck).toBeVisible();
      await expect(struck).toHaveCSS('text-decoration-line', 'line-through');
      // and we should NOT be advertising remaining stock
      await expect(page.locator('#waitlist')).not.toContainText('available');
      await expect(page.locator('#waitlist')).not.toContainText('left');
    });
  });

  test.describe('fallback (juuk unreachable)', () => {
    // when SUPABASE_* env is set, the page renders one of the data-driven states
    // — we can't simulate the unconfigured fallback from inside an e2e test.
    // runs in CI (no .env.local) and any dev environment without juuk wired.
    test('renders the original "save a spot." copy when juuk env is unset', async ({
      page,
    }) => {
      test.skip(
        jamSeedConfigured(),
        'fallback only renders when SUPABASE_* env is absent (CI / no-juuk dev)',
      );
      await gotoWaitlist(page);

      await expect(
        page.getByRole('heading', { name: 'save a spot.' }),
      ).toBeVisible();
      await expect(page.locator('#waitlist')).toContainText("Don't");
      await expect(page.locator('#waitlist')).toContainText('Miss out.');
      await expect(page.locator('#waitlist')).toContainText(
        'Full team registration will require payment',
      );
      // none of the discount-code marketing should leak in
      await expect(page.locator('#waitlist')).not.toContainText('Save $25');
      await expect(page.locator('#waitlist')).not.toContainText('All gone!');
    });
  });
});
