# Contributing

This is a solo learning project today, but it follows a professional contribution workflow so the GitHub history stays clear and reviewable.

## Branch policy

- `main` is the stable branch and should remain green.
- Create a short-lived branch for each meaningful change.
- Use names such as:
  - `feature/add-search-workflow`
  - `test/add-installation-scenario`
  - `fix/update-navigation-locator`
  - `docs/improve-setup-guide`
  - `chore/upgrade-playwright`
- Small local spelling fixes may be made directly on `main` before the repository has branch protection, but use a branch for code, configuration, tests, CI, or framework changes.

## Solo workflow

1. Start from an up-to-date `main` branch.
2. Create a focused branch.
3. Make one understandable change.
4. Update the relevant documentation and workflow brief.
5. Run `npm run validate`.
6. Review `git diff` and confirm no secrets or generated artifacts are included.
7. Push the branch to GitHub.
8. Open a pull request into `main`.
9. Review the GitHub Actions result and the changed files.
10. Merge the pull request and delete the branch.

## Pull request checklist

- [ ] The pull request explains the user or framework outcome.
- [ ] Tests are focused and independent.
- [ ] Locators follow the project policy.
- [ ] Documentation is updated.
- [ ] `npm run validate` passes locally.
- [ ] GitHub Actions passes.
- [ ] No `.env`, credentials, personal data, reports, or test results are included.
- [ ] Jira issue is linked when Jira is being used.

## Commit guidance

Use clear present-tense messages, for example:

```text
Add installation navigation scenario
Add Chromium CI workflow
Document environment setup
Fix documentation locator
```

Keep commits understandable. A pull request may contain a small number of related commits, or they may be squashed when merged.

## Branch protection after publishing

After the first GitHub Actions runs pass, protect `main` with these settings:

- Require a pull request before merging.
- Require the Playwright CI check to pass.
- Require branches to be up to date before merging when practical.
- Allow yourself to merge only after reviewing the change.
- Delete merged branches automatically.
