# Test Environments

## Purpose

The framework can run against different website environments without changing test code. The environment chooses the application URL; the tests describe the user workflow.

## Current default

If no local environment file is present, tests use the public practice site:

```text
https://playwright.dev
```

This keeps the project runnable for learning while a real application is being selected.

## Local setup

1. Copy `.env.example` to `.env`.
2. Change `BASE_URL` to the approved test environment.
3. Run `npm run test:chromium`.

Example:

```text
TEST_ENV=qa
BASE_URL=https://test.example.com
```

The `.env` file is ignored by Git. Do not put passwords, tokens, personal data, or production credentials in it.

## PowerShell alternative

A temporary value can be supplied without creating a file:

```powershell
$env:BASE_URL = "https://test.example.com"
npm run test:chromium
Remove-Item Env:BASE_URL
```

## Environment rules

- Use a dedicated non-production test environment.
- Keep the URL in configuration and the workflow in the test.
- Give each run a clear `TEST_ENV` name such as `practice`, `qa`, or `staging`.
- Do not silently point tests at production.
- Record required accounts, seeded data, feature flags, and reset steps before adding application scenarios.
- Never commit `.env` or secrets.
- Use MCP only against an approved environment.

## Stage 2 onboarding checklist

Before declaring a real application onboarded, document:

- application name and approved test URL;
- environment owner and access request process;
- test user or account prerequisites without storing credentials;
- first business workflows and expected outcomes;
- data creation and cleanup approach;
- authentication approach, if required;
- known limitations such as external dependencies or feature flags.

The current project has environment-based URL loading. The real application onboarding remains pending until an approved application URL and workflow are provided.
