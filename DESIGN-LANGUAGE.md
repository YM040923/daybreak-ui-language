# Daybreak Design Language

## 1. Core idea

Daybreak is a **warm, restrained developer-tool workspace**.

Its character comes from the relationship between five layers:

| Layer | Job | Typical material |
|---|---|---|
| Environment | Establish calm atmosphere | Warm light gradient, quiet texture |
| Workspace | Hold the product's main work area | Solid or high-opacity surface |
| Feature island | Group one complete task | Clear boundary, large radius |
| Information component | Make a value or state scannable | Small structured tile, row, or badge |
| Feedback | Explain what is happening | Copy, motion, indicator, recovery action |

Do not make every layer a card.

## 2. The design balance

| Warmth | Restraint |
|---|---|
| Soft daylight background | Low contrast decoration |
| Orange action accent | Orange is not a page background |
| Tactile surfaces | No blur behind dense text |
| Expressive empty states | No invented marketing copy |

| Developer tool | Apple-like |
|---|---|
| Useful density | Generous grouping and spacing |
| Technical values | Quiet typography hierarchy |
| Fast actions | Clear pressed and focus feedback |
| Live states | Motion with a reason |

## 3. Spatial hierarchy

Use space before decoration.

- Environment padding: 20 to 32 px on desktop, 16 to 20 px on mobile.
- Feature island padding: 20 to 28 px.
- Component group gap: 12 to 20 px.
- Text group gap: 4 to 8 px.
- Primary action height: at least 44 px.
- Touch target: at least 44 by 44 px.

Large spaces separate tasks. Small spaces connect label, value, and supporting context.

## 4. Surface hierarchy

### Environment

The background is warm and quiet. It may use a gradient or an extremely low-contrast ornament, but must not compete with content.

### Workspace

The main work area gets the strongest stable boundary. It may be a high-opacity light island or a solid work surface.

### Feature island

Use for a complete functional group such as a server area, settings group, terminal shell, or agent workspace.

### Information component

Use a row, tile, badge, meter, or inline status. It should be visually lighter than its parent.

### Dense content

Terminal, code, log, and table regions use an opaque, high-contrast surface. They are allowed to have their own theme.

## 5. Shape hierarchy

Do not use one radius everywhere.

| Element | Radius |
|---|---:|
| Large feature island | 22 to 28 px |
| Medium control or row | 14 to 18 px |
| Small status component | 8 to 14 px |
| Compact status pill | Full pill |
| Circular action | 14 to 18 px or circle |

The exact values can vary by platform, but the relationship must remain visible.

## 6. Color

Orange is the primary action and emphasis color. It is used sparingly:

- Primary action.
- Selected navigation.
- Focus or active state.
- State transition that needs attention.

Neutral surfaces carry most of the interface. Success, warning, danger, and offline colors are semantic state colors, not decoration.

Always pair state color with at least one other signal:

- Text.
- Icon or shape.
- Value change.
- Supporting explanation.
- Recovery action.

## 7. Typography

- Use a readable sans-serif for UI text.
- Use a monospace face for commands, paths, logs, and code.
- Keep labels short and concrete.
- Use technical English only when it is a real product term, protocol, command, path, or API name.
- Never add English as decoration.

## 8. Motion

Motion explains change:

- Page transition: continuity between workspaces.
- Connection indicator: activity while a connection is being established.
- Refresh highlight: a newly updated value.
- Pressed state: tactile confirmation.
- Expand or collapse: preserve spatial context.

Avoid continuous motion that has no semantic purpose.

Respect reduced-motion settings.

## 9. What makes it feel like a developer made it

- Real values have units and update times.
- Actions map to actual product capabilities.
- Empty states explain how to create or import something.
- Errors explain the cause and next action.
- The layout exposes useful context without becoming a cockpit.
- The interface does not hide important controls behind decoration.

