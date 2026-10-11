# Combining Multiple UI References

Daybreak is intended to be one style in a larger personal reference library.

## Use a reference profile

Every future UI reference project should describe itself with these dimensions:

```yaml
visual_language:
information_architecture:
interaction_model:
state_semantics:
platform_behavior:
content_voice:
```

Do not ask Codex to “mix several beautiful projects” without assigning dimensions.

## Recommended composition request

```text
Primary visual language: Daybreak
Information architecture: Reference B
Data table density: Reference C
Motion rhythm: Reference D
Mobile navigation: platform native

Preserve:
- Existing product routes
- Existing data semantics
- Existing terminal workflow

Avoid:
- Copying any reference project's business structure
- Combining multiple accent palettes
- Combining incompatible radius systems
```

## Conflict resolution

When references disagree:

1. Preserve the target product's function.
2. Follow platform and accessibility requirements.
3. Keep one primary visual language.
4. Translate secondary ideas into the primary language's tokens.
5. Reject details that reduce readability or make state ambiguous.

## What Daybreak contributes well

- Warm light environment.
- Quiet depth without heavy decoration.
- Developer-tool density.
- Explicit operational states.
- Strong desktop workbench and mobile adaptation rules.

## What Daybreak should not decide

- The target product's navigation labels.
- Its business modules.
- Its data model.
- Its authentication model.
- Its terminal implementation.

