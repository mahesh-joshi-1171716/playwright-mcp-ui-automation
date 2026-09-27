# Workflow: [Name]

## Purpose

[Explain the user or business outcome in plain language.]

## Ownership

- **Business owner:** [Name or team]
- **Priority:** [Critical, high, medium, or low]
- **Environment:** [qa, staging, or other approved non-production environment]

## Preconditions

- [Required account or access, without credentials.]
- [Required test data and how it is prepared.]
- [Required feature flag or external service.]

## Scenario

**User goal:** [What is the user trying to accomplish?]

**Steps:**

1. [User action]
2. [User action]
3. [User action]

**Expected result:** [What must the user see or be able to do?]

## Automation mapping

- **Scenario ID:** [APP-001]
- **Test file:** [tests/ui/example.spec.ts]
- **Page objects:** [pages/example.page.ts]
- **MCP discovery notes:** [What was inspected and what was reviewed before coding?]

## Data and cleanup

- **Data required:** [Describe data without secrets.]
- **Created by:** [Manual, fixture, API helper, or other approved method.]
- **Cleanup:** [How data is removed or reset.]

## Known risks

- [External dependency, timing risk, feature flag, or environment limitation.]
