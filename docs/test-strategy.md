# Test Strategy

## Test layers

The current project focuses on UI smoke and navigation tests. As the target application grows, keep the layers clear:

- Smoke tests confirm that an important page can load and a primary path works.
- Scenario tests cover one complete user outcome with independent setup.
- API or integration tests may be added later when the application requires them; they are not part of the first milestone.

## Naming

Name a test for the behavior and expected outcome, for example `user can open the installation guide`. Keep the spec file aligned with a user-facing area, such as `playwright-docs.spec.ts`.

## Locator policy

Use the most meaningful stable locator available: role and accessible name first, then label, text, or an intentional test id. Avoid selectors based on layout, generated class names, or DOM position.

## Harness policy

Shared fixtures belong in `tests/fixtures/` and should represent stable cross-scenario setup. Page objects belong in `pages/` and should expose reusable UI actions. Do not hide scenario intent inside a large abstraction.

## Quality gates

Before considering a change complete:

1. Run the focused test for the changed scenario.
2. Run `npm run test:chromium`.
3. Confirm no secrets, arbitrary waits, brittle selectors, MCP artifacts, or `test.only` remain.
4. Review the HTML report and failure artifacts when a test fails.
5. Check that the test still works without an MCP session.
