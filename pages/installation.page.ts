import { expect, type Page } from '@playwright/test';

export class InstallationPage {
  readonly heading;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Installation' });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
  }
}
