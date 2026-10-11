# Status Component Pattern

A status component contains:

1. A value or condition.
2. A semantic label.
3. A freshness or context hint.
4. A recovery or diagnostic action when the state needs attention.

For latency, change more than color as the band changes:

- `24 ms` / 响应顺畅
- `128 ms` / 延迟升高
- `340 ms` / 延迟较高 / 诊断
- `--` / 尚未检测 / 重新检测

