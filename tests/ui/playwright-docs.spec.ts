import { test, expect } from '../fixtures/test';

test.describe('Playwright documentation', () => {
  test('has a Playwright title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Playwright/);
  });

  test('user can open the installation guide', async ({
    installationPage,
    playwrightHomePage,
  }) => {
    await playwrightHomePage.goto();
    await playwrightHomePage.openInstallationGuide();

    await installationPage.expectLoaded();
  });
});
