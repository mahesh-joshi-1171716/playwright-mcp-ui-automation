# Workflow: Playwright Documentation

## Purpose

This is the first practice workflow. It teaches the structure we will use for real business workflows without requiring credentials or private data.

## Coverage

| ID | User outcome | Automated test |
| --- | --- | --- |
| DOCS-001 | A visitor can confirm they are on the Playwright documentation site. | `has a Playwright title` |
| DOCS-002 | A visitor can open the Installation guide from the documentation home page. | `user can open the installation guide` |

## Preconditions

- The website is reachable.
- Chromium is installed.
- No login or test data is required.

## DOCS-001: Confirm the documentation site

**User goal:** Confirm that the public documentation page is the Playwright site.

**Expected result:** The page title contains `Playwright`.

**Automation location:** `tests/ui/playwright-docs.spec.ts`

## DOCS-002: Open the Installation guide

**User goal:** Read the installation instructions.

**Steps:**

1. Open the documentation home page.
2. Select the `Get started` link.
3. Confirm the `Installation` heading is visible.

**Expected result:** The Installation guide is visible after navigation.

**Automation location:** `tests/ui/playwright-docs.spec.ts`

## MCP discovery notes

MCP can help confirm the accessible link name `Get started` and the heading name `Installation`. Those observations are represented in reviewed Playwright locators and executable assertions. The test does not depend on MCP being active.

## Future application mapping

When the real application is selected, replace this practice document with workflows that include a business owner, priority, preconditions, expected outcomes, environment, and test mapping.
