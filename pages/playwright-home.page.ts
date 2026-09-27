import { type Page } from '@playwright/test';

export class PlaywrightHomePage {
  readonly getStartedLink;

  constructor(private readonly page: Page) {
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async openInstallationGuide(): Promise<void> {
    await this.getStartedLink.click();
  }
}
