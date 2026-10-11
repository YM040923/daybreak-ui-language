# State Semantics

The interface must show what the data means, not just decorate the data.

## General state matrix

| State | Required content | Visual treatment | Recovery |
|---|---|---|---|
| Normal | Current value and freshness | Stable surface | Primary action |
| Loading | What is being loaded | Local skeleton or activity indicator | Cancel when meaningful |
| Empty | Why there is no content | Composed explanation | Create or import |
| Offline | Last known context | Lower emphasis, no false freshness | Reconnect |
| Error | Cause or scope of failure | Local high-contrast feedback | Retry or details |
| Disabled | Why the control is unavailable | Reduced emphasis, still understandable | Go to prerequisite |
| Recovery | Current recovery progress | Positive activity feedback | Cancel or continue |
| Stale | Last successful update time | Freshness hint | Refresh |
| Permission denied | Missing permission or credential | Clear boundary explanation | Authorize or change scope |

## Connection states

| State | Label | Component changes |
|---|---|---|
| Connected | 已连接 | Live metrics, healthy indicator, main actions enabled |
| Connecting | 正在连接 | Activity indicator, no fake live metrics, cancel available |
| Reconnecting | 正在重连 | Preserve context, show attempt or elapsed time |
| Disconnected | 未连接 | Neutral surface, connect action |
| Error | 连接失败 | Cause summary, retry and details |
| Authentication failed | 身份验证失败 | Credential-focused message, not a generic offline label |

## Latency bands

Thresholds belong to the product and network context. The band names are reusable:

| Band | Meaning | Suggested treatment |
|---|---|---|
| Good | Interaction feels immediate | Quiet positive status |
| Watch | Noticeably slower | Amber hint and freshness context |
| Degraded | Affects work | Stronger emphasis, diagnose or retry |
| Critical | Near timeout or unusable | High-contrast state and recovery action |
| Unknown | Not measured | `--` or 未检测, never a fake healthy value |

The latency component should change at least two dimensions as the band changes:

1. Label or supporting copy.
2. Value treatment.
3. Border, meter, or indicator shape.
4. Available action.

## Example

Bad:

```text
340 ms
```

with only a red number.

Better:

```text
340 ms
延迟较高 · 最近一次检测刚刚完成
[诊断连接] [重新检测]
```

The number remains useful, while the state becomes actionable.

