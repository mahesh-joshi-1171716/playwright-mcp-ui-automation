# Documentation Policy

Documentation is part of the implementation. A change is not complete until the relevant explanation, command, example, or decision is updated.

## Change checklist

Before finishing a change, ask:

- [ ] Does `README.md` need a new command, folder, setup step, result explanation, or roadmap update?
- [ ] Does `docs/roadmap.md` need progress or exit criteria updated?
- [ ] Does `docs/test-strategy.md` need a new test, locator, isolation, or quality rule?
- [ ] Does `docs/workflows/` need a new or changed user journey?
- [ ] Does `docs/environments.md` need environment, access, data, or cleanup details?
- [ ] Does `docs/mcp-playwright.md` need a new MCP workflow, permission boundary, or limitation?
- [ ] Does `docs/github-actions.md` need a CI command, artifact, runner, or trigger update?
- [ ] Does `docs/integrations.md` need a GitHub, Jira, or external-service decision?
- [ ] Does `docs/glossary.md` need a new technical term or command explained in plain language?
- [ ] Do `.github/` instructions need to reflect a changed coding or agent rule?

## Required updates by change type

| Change | Documentation to review |
| --- | --- |
| New test scenario | Workflow brief, README structure, test strategy |
| New page object or fixture | README structure, test strategy |
| Config or environment change | README setup/commands, environments guide, roadmap |
| MCP change | MCP guide, project instructions, README safety rules |
| CI change | GitHub Actions guide, README commands, integrations guide |
| Authentication or test data | Environments guide, workflow preconditions, safety rules |
| New dependency or script | README setup/commands, CI guide, package metadata |
| Framework decision | Roadmap, README, and the relevant detailed guide |

## Review routine

1. Read the changed code and identify its user or contributor impact.
2. Update the smallest relevant documentation files.
3. Check links, commands, paths, and examples against the current repository.
4. Run `npm run validate` when code or configuration changed.
5. Confirm no secrets, local environment files, or generated artifacts were documented or staged.
6. Include the documentation update in the same commit as the implementation.

## Keeping documentation trustworthy

- Prefer plain language and explain technical terms when first introduced.
- Use commands that have been run successfully.
- Keep examples safe to copy and free of credentials.
- Distinguish practice-site behavior from real-application behavior.
- Record unfinished work honestly in the roadmap.
- Do not create documentation for an abstraction that does not exist yet.
