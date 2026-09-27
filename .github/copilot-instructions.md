# Playwright Project Instructions

## Purpose

This repository is a UI automation learning project using Playwright Test with TypeScript and Playwright MCP.

## Test design rules

- Use Playwright Test for committed, repeatable automation.
- Use Playwright MCP for exploration, inspection, and debugging. Review all MCP observations before converting them into test code.
- Prefer accessible locators such as `getByRole`, `getByLabel`, and `getByText` when the text is a stable user-facing contract.
- Prefer `getByTestId` when the application provides an intentional test id.
- Avoid brittle CSS or XPath chains, arbitrary sleeps, and assertions against implementation details.
- Every test must be independent and should describe one user outcome.
- Use web-first assertions such as `toBeVisible`, `toHaveURL`, and `toHaveTitle`.
- Keep page objects focused on reusable UI actions and locators. Keep business intent and final assertions in the test when possible.
- Do not add speculative framework layers. Add fixtures, test data, or helpers only when repeated behavior justifies them.

## Safety and quality guardrails

- Never commit credentials, tokens, personal data, or MCP session artifacts.
- Do not use MCP against sensitive systems without explicit authorization.
- Do not commit generated selectors without reviewing their stability and meaning.
- Do not leave `test.only` in committed code.
- Run the smallest relevant test after every test or configuration change, then run the broader suite before finishing.
- Preserve failure artifacts and use the HTML report, trace, headed mode, or Playwright inspector to diagnose failures.
