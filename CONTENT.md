# Content and Language

## Principles

- Prefer concrete verbs: 连接、重试、打开终端、导入、查看详情.
- Explain the condition before asking the user to act.
- Keep labels short, but do not remove the information needed to make a decision.
- Use real units: ms, %, GB, uptime, last updated time.
- Never show a placeholder as if it were live data.

## Chinese-first product copy

Use Chinese for ordinary interface copy when the product is Chinese-language.

Technical English is appropriate for:

- SSH, SFTP, TOML, GitHub, Docker, nginx.
- Commands, paths, hostnames, package names, and APIs.
- Product terms that are genuinely named in English.

Do not add English labels such as `Recommended`, `Minimal`, or `Daybreak Light` only to make a screen look technical.

## State copy pattern

```text
[what happened] + [what it means] + [what can be done]
```

Example:

```text
连接失败
服务器拒绝了凭据。请检查用户名、密钥或金库选择。
[重新连接] [查看详情]
```

