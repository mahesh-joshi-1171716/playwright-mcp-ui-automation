# Project Glossary

**Audience:** A non-technical reader, a new contributor, or a Quality Assurance Engineer building this framework step by step.

This glossary explains words and commands used in the project without assuming that the reader already knows the tooling.

## Project terms

### Automation test

A repeatable program that performs user actions in a browser and checks whether the expected result happened.

Example: open the Playwright website, select `Get started`, and verify that the Installation heading is visible.

### UI automation

Testing the application through the user interface, usually by opening a real browser and interacting with visible elements.

### Playwright Test

The test runner used by this project. It opens browsers, runs TypeScript test files, performs assertions, and creates reports.

### BDD

Behavior-Driven Development. A style that describes behaviour in a business-readable format, often using feature files and step definitions. This project does not add a BDD layer because the current goal is to learn and keep Playwright's native test model visible.

### Gherkin

The plain-language syntax commonly used by BDD tools, with terms such as `Given`, `When`, and `Then`. This project uses workflow briefs in Markdown instead of executable Gherkin and step-definition glue.

### Playwright MCP

A browser tool that helps an AI assistant explore a website, inspect its accessible structure, and try interactions. MCP helps discover a workflow; reviewed Playwright tests remain the repeatable source of truth.

### Framework

The reusable structure around individual tests. In this project that includes configuration, fixtures, page objects, test conventions, documentation, reports, and CI.

### Test harness

The shared support layer that makes tests consistent. It includes fixtures, browser defaults, environment handling, retries, timeouts, and failure evidence.

### Test scenario

One user outcome that a test protects.

Example: `user can open the installation guide`.

### Smoke test

A small, fast test that checks whether an important path works at a basic level. Smoke tests do not prove that every feature works.

### Assertion

The part of a test that checks an expected result.

Example: `toHaveTitle(/Playwright/)` checks the page title.

### Locator

A description Playwright uses to find an element on the page.

Preferred examples include `getByRole`, `getByLabel`, and `getByText` because they describe how a user or assistive technology identifies the element.

### Page object

A class that keeps reusable page locators and actions in one place. It should simplify mechanics without hiding the user outcome from the test.

### Fixture

Shared test setup provided to a test. This project uses typed fixtures to create page objects consistently for each test.

### Test isolation

Each test prepares and checks its own state so it does not depend on another test running first.

## Configuration terms

### `baseURL`

The common website address used by tests. Tests can navigate with a relative path such as `/` instead of repeating the full address.

### `BASE_URL`

The environment variable used to override the default practice-site address. It can be placed in a local `.env` file, which must never be committed.

### `TEST_ENV`

A human-readable name for the environment, such as `practice`, `qa`, or `staging`. It is included in Playwright report metadata.

### `SLOW_MO`

An optional environment value that adds a delay between browser actions. For example, `SLOW_MO=500` adds a 500 millisecond delay for local headed observation. It is disabled by default and is not used in CI.

### `.env`

A local file containing environment-specific values. This project ignores it because it may contain private URLs or secrets.

### `.env.example`

A safe template showing which environment variables are available. It contains no credentials.

### `tsconfig.json`

The TypeScript configuration file. It tells the editor and compiler which files to check and which language rules and types to use.

## Commands

### `npm`

The Node.js package manager. It installs dependencies and runs project scripts.

### `npm install`

Downloads the libraries listed in `package.json` and records exact dependency versions in `package-lock.json`.

### `npm run validate`

The project's local quality gate. It runs two checks in sequence:

1. `npm run typecheck` checks TypeScript without opening a browser.
2. `npm run test:chromium` runs the UI tests in Chromium.

A successful `npm run validate` means the current code type-checks and the current Chromium scenarios pass locally.

### `npm run typecheck`

Runs the TypeScript compiler in checking mode. It finds type and configuration errors without producing JavaScript files.

### `npm run test:chromium`

Runs the Playwright UI test suite in Chromium without showing the browser window.

### `npm run test:headed`

Runs the same Chromium tests with a visible browser window. This is useful for learning and watching the actions.

### `npm run test:debug`

Runs the tests with the Playwright inspector so actions can be examined step by step.

### `npm run test:ui`

Opens Playwright UI mode, which provides a visual way to select, run, and inspect tests.

### `npm run test:list`

Lists the tests that Playwright discovers without running them.

### `npm run report`

Starts the local HTML report server so the latest results can be reviewed in a browser.

## Results and evidence

### HTML report

A browsable summary of test results. It shows passed and failed tests and links to available evidence.

### Trace

A replayable record of a test run. It helps investigate actions, page state, snapshots, and timing when a test fails.

### Screenshot and video

Failure evidence configured by Playwright. These files help diagnosis and are ignored by Git.

### Artifact

A file saved by a test or CI run for later review, such as a report, trace, screenshot, or video.

### Flaky test

A test that sometimes passes and sometimes fails without an intentional code or application change. Flakiness should be investigated and fixed, not hidden with arbitrary waits.

## Git and GitHub terms

### Git

A version-control system that records changes to files over time.

### Repository

The project folder tracked by Git. The remote copy of this project will live on GitHub.

### `main`

The stable branch. It should remain green and contain reviewed changes.

### Branch

A separate line of work based on another branch. A Quality Assurance Engineer can use branches to keep experimental or focused work away from stable `main`.

### Pull request

A request to merge a branch into `main`. GitHub Actions can run checks before the change is merged, even when there is only one contributor.

### Commit

A saved checkpoint in Git with a message describing the change.

### GitHub Actions

GitHub's hosted automation service. This project uses it to install dependencies, type-check the project, run Chromium tests, and upload reports.

### CI

Continuous Integration. It means automatically checking changes when they are pushed or submitted in a pull request.

## Documentation and planning terms

### Workflow brief

A plain-language description of a user or business outcome, including preconditions, steps, expected result, and the test that covers it.

### Roadmap

The staged plan showing what is complete, what comes next, and what is intentionally postponed.

### Quality gate

A check that must pass before a change is considered ready. In this project the main local gate is `npm run validate`.

### Living documentation

Documentation that is updated with the implementation instead of being written once and allowed to become outdated.

### Jira

An optional planning and traceability tool. It is not required to run local tests or GitHub Actions.

## A simple mental model

```text
MCP explores a workflow
        |
        v
A workflow brief explains the user outcome
        |
        v
A Playwright test repeats the outcome
        |
        v
npm run validate checks the change locally
        |
        v
GitHub Actions checks the branch before merge
```

When a new term appears in the project, add it here in plain language and update the README links if the term affects how people use the framework.
