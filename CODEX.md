# Codex Quick Protocol

Use this file when the user gives you this repository as a UI reference.

## Design read

Read this style as:

> A light-first developer-tool workspace with warm environmental depth, restrained surfaces, meaningful density, status-aware components, and platform-native layouts.

## Before editing the target project

Answer these questions from the target codebase:

1. What is the product's primary job?
2. Which pages and workflows already exist?
3. Which controls are functionally important?
4. Which platform conventions apply?
5. Which states can the data actually have?
6. What does the user want to borrow: visual language, layout, interaction, state semantics, or motion?
7. What must not be copied from the reference project?

## Implementation sequence

1. Audit the target information architecture.
2. Make a reference mapping: `borrow`, `preserve`, `avoid`, `platforms`, `states`.
3. Establish shared tokens.
4. Restyle the application shell.
5. Restyle three representative components.
6. Add real state variants.
7. Extend the language to every affected page.
8. Verify desktop, mobile, keyboard, touch, and recovery paths.

## Composition with other UI references

There must be one primary visual language per product. Other references can contribute only a named dimension:

```text
primary visual language: Daybreak
information architecture: Reference B
table density: Reference C
motion rhythm: Reference D
```

When references conflict, use this priority:

1. Product function and existing workflow.
2. Platform behavior and accessibility.
3. User's explicit visual request.
4. Primary design language tokens and component rules.
5. Secondary references.
6. Decoration.

Do not merge references by stacking their colors, shadows, gradients, and radii.

## Completion test

The result is not Daybreak if it only changes:

- Color.
- Background.
- Corner radius.
- A single dashboard page.

It should also improve:

- Hierarchy.
- Information grouping.
- State visibility.
- Feedback.
- Platform adaptation.
- Consistency across all affected pages.

