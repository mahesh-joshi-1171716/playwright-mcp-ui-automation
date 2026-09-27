---
applyTo: "**/*.{ts,tsx}"
description: "Use for Playwright TypeScript configuration, fixtures, page objects, and UI tests in this repository."
---

# Playwright TypeScript Guidance

- Import `test` and `expect` from the shared fixture module when the test needs project fixtures.
- Use the configured `baseURL` and relative paths for navigation.
- Prefer role, label, text, and test-id locators over CSS or XPath selectors.
- Use web-first assertions instead of manually polling or waiting.
- Keep tests independent, focused on one user outcome, and safe to run in parallel.
- Put reusable UI mechanics in page objects; keep scenario intent visible in the spec.
- Use Playwright MCP to inspect and explore, but review and stabilize any generated locator before committing it.
- Do not add credentials, arbitrary delays, `test.only`, or MCP session artifacts.
