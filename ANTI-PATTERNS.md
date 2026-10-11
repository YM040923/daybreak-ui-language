# Anti-Patterns

## Color-only redesign

Changing blue to orange, adding a gradient, and increasing radius is not a design-language migration.

The migration must also improve hierarchy, grouping, state feedback, and platform behavior.

## Card everything

Do not wrap:

- Every settings row.
- Every metric.
- Every button.
- Every empty-state sentence.
- A terminal inside multiple translucent cards.

Use spacing, separators, alignment, and surface changes where they communicate structure better.

## Glass everywhere

Avoid:

- Transparent terminal content.
- Low-opacity text over a moving background.
- Several glass layers stacked together.
- Blur used to hide a weak hierarchy.

## One universal radius

If every element is 24 px, the interface loses scale and interaction hierarchy.

## Decorative English

Technical interfaces do not become more professional by adding unexplained English labels.

## State by color only

Red, orange, and green must not be the only signals. Add text, value, icon, structure, or action.

## Desktop shrunk into mobile

Do not compress a rail into a tiny strip or keep desktop-only context permanently visible on a phone.

## Fake data

Do not invent live metrics, timestamps, or health labels to fill a mockup. Use clearly labeled example data or empty states.

## Motion as decoration

No permanent floating, pulsing, or bouncing unless it explains activity, change, focus, or continuity.

