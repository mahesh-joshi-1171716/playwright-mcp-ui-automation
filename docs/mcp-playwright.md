# Playwright MCP Workflow

## Role of MCP

Playwright MCP is an interactive browser tool available to the VS Code agent through `.vscode/mcp.json`. It helps an assistant navigate a page, inspect the accessible tree, observe visible state, and try a user interaction.

The normal Playwright Test command does not depend on MCP. This separation keeps the test suite deterministic and makes it possible to run tests locally or in CI without an active agent session.

## Start the server

VS Code reads the workspace MCP configuration and starts the server with:

```text
npx @playwright/mcp@latest
```

Use the MCP server from an agent conversation after it is enabled in VS Code. The first run may download the MCP package and use the installed Playwright browser.

## Exploration workflow

1. Open the approved practice site with MCP.
2. Inspect the page and identify the user-visible role, name, label, or heading involved in the scenario.
3. Perform the smallest interaction needed to understand the flow.
4. Confirm the resulting visible state or URL.
5. Convert the observation into reviewed Playwright Test code under `tests/ui/`.
6. Move repeated mechanics into `pages/` only after the scenario works.
7. Run the committed test independently of MCP.

## Guardrails

- Do not use MCP with credentials, private customer information, or systems without authorization.
- Do not treat a generated selector as automatically stable.
- Do not commit MCP transcripts, browser profiles, screenshots used only for exploration, or generated session files.
- Do not replace assertions with an MCP observation. A durable test needs an executable Playwright assertion.
- Prefer accessible locators and visible user outcomes over DOM implementation details.

## Example conversion

An MCP inspection may reveal a link named `Get started` and an Installation heading. The committed test should express that user journey with `getByRole` and a web-first assertion, then pass when run by `npm run test:chromium`.
