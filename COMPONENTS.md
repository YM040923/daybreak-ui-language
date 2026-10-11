# Component Patterns

Components are defined by their job and state behavior, not by a mandatory framework.

## Feature island

Use a large island only when it groups one complete task or a coherent workspace.

- Radius: 22 to 28 px.
- Surface: opaque or high-opacity.
- Boundary: subtle line and restrained elevation.
- Do not nest islands by default.

## Metric tile

- Label first, then value, then only decision-relevant context.
- Include units and freshness where appropriate.
- Use a bar or ring only when it represents a real bounded quantity.
- Avoid giving every metric the same emphasis.

## Status badge

A status badge includes a text label or accessible name. It may use color and shape, but never color alone.

## Latency component

Show value, semantic band, freshness context, and a useful action when degraded. The thresholds are product-specific.

## Navigation

- Desktop: rail or sidebar when persistent context improves work.
- Mobile: bottom navigation for a small set of primary destinations; overflow destinations must remain reachable.
- Selected state uses shape, surface, and label weight, not just an accent icon.

## Settings row

Group related rows in one feature island. Align labels and controls. Explain disabled prerequisites.

## Terminal shell

Style tabs and controls with Daybreak. Keep terminal content opaque, high contrast, and independently themeable.

## Empty state

Explain what is missing and give the next useful action. Decorative illustration is optional.

