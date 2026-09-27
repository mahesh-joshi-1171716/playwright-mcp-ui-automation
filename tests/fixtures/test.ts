import { test as base, expect } from '@playwright/test';
import { InstallationPage } from '../../pages/installation.page';
import { PlaywrightHomePage } from '../../pages/playwright-home.page';

type Fixtures = {
  installationPage: InstallationPage;
  playwrightHomePage: PlaywrightHomePage;
};

export const test = base.extend<Fixtures>({
  installationPage: async ({ page }, use) => {
    await use(new InstallationPage(page));
  },
  playwrightHomePage: async ({ page }, use) => {
    await use(new PlaywrightHomePage(page));
  },
});

export { expect };
