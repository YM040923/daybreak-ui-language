# Responsive Rules

Daybreak is not a desktop layout shrunk into a phone. The platform changes the composition while preserving the task and state semantics.

## Windows and desktop

- Use a navigation rail or sidebar when multiple work areas must remain reachable.
- Keep navigation, context, and the main work surface visible at the same time when width allows.
- Use two or more columns for independent context and work content.
- Keep terminal tabs, split controls, and secondary actions close to the terminal shell.
- Use wider settings groups with labels and controls aligned on a shared rhythm.
- Allow information density to increase, but do not remove explanations from status states.

## Android and narrow screens

- Prefer a single-column reading order.
- Use bottom navigation or a compact top-level switcher.
- Keep primary actions within comfortable thumb reach.
- Turn desktop sidebars into a dedicated screen, drawer, or bottom navigation. Do not compress them into an unreadable strip.
- Keep server state, latency, and recovery actions visible without horizontal scrolling.
- Move terminal controls into a bottom toolbar or expandable action surface.
- Preserve labels and state semantics even when secondary metadata is collapsed.

## Breakpoint behavior

| Width | Composition |
|---:|---|
| 1280+ | Full workbench, rail, context column, main content |
| 900 to 1279 | Rail plus main content, context becomes a drawer or compact column |
| 600 to 899 | Single-column content with compact top navigation |
| Under 600 | Thumb-first single column, bottom navigation, stacked actions |

## What must not change between platforms

- Meaning of state colors and labels.
- Critical actions.
- Error and recovery semantics.
- Content terminology.
- Terminal readability.

