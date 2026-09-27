# Professional Automation Roadmap

This roadmap keeps the framework understandable while it grows. Complete and verify one stage before starting the next.

## Stage 1: Foundation

- Keep Playwright Test and MCP responsibilities separate.
- Use a typed fixture entry point and a small page-object layer.
- Configure a base URL, Chromium execution, retries, traces, screenshots, videos, and HTML reports.
- Use stable accessible locators and independent tests.
- Document the project rules and MCP workflow.

**Exit criteria:** A new contributor can install the project, run one focused test, debug it in headed mode, and understand the report.

## Stage 2: Real application onboarding

- [x] Add environment-based URL loading with a safe practice-site fallback.
- [ ] Replace the practice URL with an approved application test URL.
- Record supported environments without committing secrets.
- Document the first business workflows and their expected outcomes.
- Add page objects only for real repeated interactions.
- Add test data factories when scenarios require controlled data.

**Exit criteria:** The suite can run against a non-production test environment with documented prerequisites.

**Current status:** The reusable environment layer is implemented. The application-specific portion is waiting for an approved test URL and first workflow.

Practice workflow documentation and a reusable workflow template are now available under `docs/workflows/`.

## Stage 3: Reliable test harness

- Add authenticated browser state only when authentication is required.
- Add fixtures for stable test data setup and cleanup.
- Define timeout, retry, parallelism, and quarantine policies from observed behavior.
- Add API helpers only when they improve setup or verification and remain within the test contract.
- Track flaky tests and fix root causes instead of increasing retries indefinitely.

**Exit criteria:** Tests are isolated, repeatable, diagnosable, and safe to run in parallel.

## Stage 4: Quality gates

- Add formatting and linting for TypeScript.
- [x] Add a type-check command.
- Add test listing and accidental `test.only` protection.
- Add a focused smoke suite and a broader regression suite.
- Review locator quality, secret handling, artifacts, and MCP-derived code during changes.

**Exit criteria:** A pull request can prove code quality and test behavior with repeatable local commands.

## Stage 5: CI and broader coverage

- [x] Run Chromium smoke tests on every change.
- Run broader browser coverage on a controlled schedule or release workflow.
- [x] Publish HTML reports and failure artifacts from CI.
- Add Firefox and WebKit after Chromium scenarios are stable.
- Add visual, accessibility, API, or performance checks only when the product needs them.

**Exit criteria:** The automation gives useful release feedback without becoming a second source of application behavior.

## Professional guardrails

- Do not add a framework abstraction because it sounds enterprise-ready; add it when repeated evidence shows it is needed.
- Keep test intent visible in the spec and mechanics reusable in page objects or fixtures.
- Treat MCP output as exploratory input that requires human review.
- Never commit secrets, private data, browser profiles, or MCP session artifacts.
- Prefer fixing application or locator causes of flakiness over adding waits or retries.
