# Optional Integrations

## GitHub

The repository is designed to be pushed to GitHub. The project should include the source, documentation, tests, configuration, and workflow files. Local `.env` files and Playwright output folders are ignored.

Recommended GitHub setup:

- Use a public repository for this practice project after checking that no private material is included.
- Push the project after reviewing `git status` and confirming no `.env` or credentials are included.
- Enable the workflow in `.github/workflows/playwright.yml`.
- Protect the default branch after the workflow is consistently passing.
- Require the CI check for pull requests once the project has regular changes.
- Follow [CONTRIBUTING.md](../CONTRIBUTING.md) for branches, pull requests, reviews, and merge hygiene.

## Jira

Jira is optional. A free account can be added later without changing the test framework.

Use Jira for planning and traceability, not as a runtime dependency:

- Create an issue for a business workflow or framework improvement.
- Use the workflow ID in the issue and documentation, for example `DOCS-002` or a future application key.
- Link the issue or key in the pull request description.
- Keep executable tests and quality gates in this repository.
- Do not place Jira tokens or credentials in test code, `.env.example`, or workflow files.

A future Jira integration may publish test results or update issues, but it should be added only after the basic GitHub Actions workflow is reliable.

## Integration principle

External services should improve visibility without becoming required for local UI tests. The framework must remain runnable with `npm run validate` even when GitHub, Jira, or MCP is unavailable.
