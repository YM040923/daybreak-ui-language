# Daybreak UI Implementation Rules

This repository is a design-language reference. Read it before changing a product UI.

## Non-negotiable order

1. Inspect the target product's existing information architecture.
2. List the workflows, pages, controls, and states that must remain usable.
3. Choose Daybreak as the visual language, not as a replacement business structure.
4. Read the relevant token, component, state, and responsive documents.
5. Implement the shell and three representative components first.
6. Show normal, loading, empty, offline, error, disabled, and recovery states where they apply.
7. Verify desktop and mobile separately.
8. Test the real interaction path, not only a screenshot.

## Preserve

- Existing routes and feature entry points unless the user explicitly asks to change them.
- Existing data semantics and actions.
- Terminal, code, log, and table readability.
- Platform-native input, navigation, keyboard, and touch behavior.
- Existing accessibility affordances.

## Borrow

- Warm light environment layers.
- Clear separation between environment, workspace, feature islands, and information components.
- Restrained high-opacity light surfaces.
- Rounded hierarchy instead of one universal radius.
- State-aware metrics and controls.
- Quiet motion used for feedback and continuity.
- Desktop workbench composition and mobile thumb-first composition.

## Never

- Do not apply orange to every surface.
- Do not turn every row or number into a card.
- Do not use decorative English labels.
- Do not make a terminal, code editor, or log viewport translucent if it reduces readability.
- Do not use color alone to communicate a state.
- Do not invent data just to fill a design.
- Do not copy the reference project's routes, business model, or page composition.
- Do not redesign only the dashboard when the product has multiple important pages.
- Do not treat a mockup as proof that the real product works.

## Required state behavior

Every meaningful data component must define:

- What it shows when data is fresh.
- What it shows while loading.
- What it shows when data is stale or unknown.
- What it shows on failure or offline.
- What action is available to recover.

Latency changes must affect at least two of:

- Label or supporting copy.
- Value treatment.
- Border or container emphasis.
- Icon or indicator shape.
- Available action.

## Required evidence

Before calling a UI change complete, capture or inspect:

- The first screen.
- At least one secondary page.
- The critical interaction.
- A narrow mobile viewport.
- One non-success state.

