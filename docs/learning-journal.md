# Learning Journal

**Author:** Mahesh Joshi  
**Project:** Playwright MCP UI Automation

This journal records what was built, what was learned, evidence from validation, and what comes next. It is the detailed source for future portfolio updates and LinkedIn posts.

## Author background

Mahesh Joshi is a Quality Assurance Engineer who uses Playwright with TypeScript in daily work. This project focuses on the framework-building challenge: designing Playwright from scratch, understanding the role of Playwright MCP, and integrating MCP into a maintainable automation workflow.

## Project goals

- Learn Playwright UI automation with TypeScript.
- Learn how Playwright MCP supports exploration and debugging.
- Build a maintainable test harness instead of isolated scripts.
- Practice documentation, Git branches, pull requests, and CI.
- Grow the project step by step without pretending unfinished work is complete.

## Day 1: Foundation

**Goal:** Create a working Playwright Test project and understand the difference between MCP exploration and committed automation.

**Completed:**

- Configured Playwright Test with Chromium.
- Added a typed fixture entry point.
- Added page objects for the practice site.
- Added title and Installation navigation scenarios.
- Added MCP, test strategy, and project guidance.

**Learnings:**

- MCP is useful for discovering page structure and interactions.
- Playwright Test is the repeatable source of truth.
- Accessible locators such as roles and names are more meaningful than fragile selectors.
- A test should verify a user outcome, not just perform clicks.

**Evidence:** `npm run validate` passed with 2 Chromium tests.

## Day 2: Environments and workflows

**Goal:** Make the framework ready to switch from the public practice site to an approved test environment.

**Completed:**

- Added `BASE_URL` and `TEST_ENV` configuration.
- Added `.env.example` and ignored local `.env` files.
- Added environment onboarding guidance.
- Added workflow briefs and a reusable workflow template.
- Added environment metadata to Playwright reports.

**Learnings:**

- Environment values belong in configuration, not in test steps.
- Secrets must never be copied into examples or committed files.
- Business workflows should be described before they become automation.

**Evidence:** Default and external `BASE_URL` runs passed with 2 tests.

## Day 3: Quality, Git, and CI

**Goal:** Make the project suitable for a public GitHub learning repository.

**Completed:**

- Added TypeScript checking and `npm run validate`.
- Added GitHub Actions for type-checking and Chromium tests.
- Added report and failure-artifact uploads.
- Added MIT license and contribution guidance.
- Initialized Git with `main` and a documentation branch.
- Added architecture diagrams for runtime and delivery flows.

**Learnings:**

- A Quality Assurance Engineer can use branches and pull requests to keep `main` stable.
- CI should run the same meaningful checks locally and remotely.
- Documentation is part of the implementation, not an afterthought.
- Reports and artifacts make failures explainable.

**Evidence:** `npm run validate` passed with TypeScript and 2 Chromium tests.

## Next learning day

- Push the repository to GitHub.
- Open the documentation pull request.
- Enable branch protection after CI passes.
- Add one new practice-site UI scenario using the workflow template.
- Later, add a real application only when an approved test URL is available.

## Entry template

### Day [number]: [short title]

**Goal:** [What will be learned or built?]

**Completed:**

- [Change]

**Learnings:**

- [Learning]

**Evidence:** [Command, test result, report, screenshot, or pull request.]

**Next:** [Next small step.]
