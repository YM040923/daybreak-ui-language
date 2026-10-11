# Daybreak UI Language

Daybreak is a light-first UI language for developer tools, SSH clients, server managers, local utilities, and other software that must feel calm without becoming vague.

It was distilled from the visual study of [Orange Cloud](https://github.com/YM040923/orange-cloud) and the MaidKit Daybreak redesign. It is **not** a copy of either product and does not contain their application source code.

## What this repository is for

- A design reference that Codex can read before changing a product UI.
- A practical guide for developers who want a warm, restrained tool interface.
- A small, runnable demo showing real component states.
- A reusable vocabulary for combining several UI references without creating a visual mixture.

## The short version

Daybreak combines:

- A warm, quiet light environment.
- Developer-tool information density.
- Clear workspace and feature-island hierarchy.
- Small status components that react to real data.
- Apple-like spacing, alignment, and feedback.
- Desktop workbench layouts and thumb-friendly mobile layouts.
- Preservation of the target product's existing workflows.

It is **not**:

- An orange theme.
- A glassmorphism-everywhere template.
- A dashboard replacement.
- A copy of Orange Cloud's routes, data model, or business structure.

## Use the demo

The demo has no build step and no dependency.

```powershell
python -m http.server 8080 -d demo
```

Then open `http://localhost:8080`.

You can also open `demo/index.html` directly. The demo includes:

- Servers, assets, projects, snippets, agent, and settings examples.
- Desktop and mobile previews.
- Connection states.
- Latency bands from healthy to timeout.
- A visible state inspector explaining what changed.

## Read in this order

For a human:

1. [README.zh-CN.md](README.zh-CN.md)
2. [DESIGN-LANGUAGE.md](DESIGN-LANGUAGE.md)
3. [COMPONENTS.md](COMPONENTS.md)
4. [STATES.md](STATES.md)
5. [COMPOSITION.md](COMPOSITION.md)

For Codex:

1. [AGENTS.md](AGENTS.md)
2. [CODEX.md](CODEX.md)
3. [tokens/daybreak.json](tokens/daybreak.json)
4. The relevant file under `examples/`
5. The demo state that matches the target workflow

## License

- Demo code and tokens: Apache-2.0. See [LICENSE](LICENSE).
- Documentation and original design material: CC BY 4.0. See [LICENSE-DOCS](LICENSE-DOCS).
- Third-party names, trademarks, and reference projects remain owned by their respective owners.

