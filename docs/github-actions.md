# GitHub Actions

## What CI does

GitHub Actions is an automated runner for the repository. When code is pushed or a pull request is opened, it:

1. Installs the exact dependencies from `package-lock.json`.
2. Installs Chromium and its Linux dependencies.
3. Checks TypeScript with `npm run typecheck`.
4. Runs the Chromium UI tests with `npm run test:ci`.
5. Uploads the Playwright report and failure evidence for up to 14 days.

The workflow is defined in `.github/workflows/playwright.yml`.

## Why Chromium first

Chromium provides fast feedback while the framework and scenarios are being learned. Firefox and WebKit can be added after the Chromium suite is stable and the additional runtime cost is justified.

## Local equivalent

Run the same quality gate before pushing:

```text
npm run validate
```

For visible browser learning and debugging, use:

```text
npm run test:headed
npm run test:debug
npm run test:ui
```

CI is intentionally headless. A local headed run is the right way to watch the browser; CI should provide repeatable results and artifacts.

## Environment safety

The current workflow uses the safe `playwright.dev` fallback because no application environment has been selected. When an approved test environment is available, configure `BASE_URL` as a GitHub Actions variable or secret according to the application security requirements. Never put credentials in workflow files.

## Pull request rule

A pull request should be considered ready when the type-check and Chromium UI job passes, the report has been reviewed when failures occurred, and the change follows the project guardrails.
