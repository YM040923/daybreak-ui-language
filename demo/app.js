const pages = [...document.querySelectorAll("[data-page-view]")];
const navigation = [...document.querySelectorAll("[data-page]")];
const appShell = document.querySelector("#appShell");
const topbarState = document.querySelector("#topbarState");
const latencyRow = document.querySelector("#latencyRow");
const latencyDot = document.querySelector("#latencyDot");
const latencyValue = document.querySelector("#latencyValue");
const latencyLabel = document.querySelector("#latencyLabel");
const latencyHint = document.querySelector("#latencyHint");
const latencyAction = document.querySelector("#latencyAction");
const stateExplanation = document.querySelector("#stateExplanation");
const inspectorTitle = document.querySelector("#inspectorTitle");
const inspectorText = document.querySelector("#inspectorText");
const serverCard = document.querySelector(".server-card");
const serverConnectionDot = document.querySelector("#serverConnectionDot");
const serverMetrics = document.querySelector("#serverMetrics");
const serverMeta = document.querySelector("#serverMeta");
const connectionNotice = document.querySelector("#connectionNotice");

const connectionCopy = {
  connected: ["状态：已连接", "实时指标可用", "状态颜色、文案和动作一起表达连接结果。"],
  connecting: ["状态：连接中", "正在建立连接", "不展示过期指标，用户可以取消或等待。"],
  offline: ["状态：未连接", "服务器暂不可用", "保留服务器上下文，并提供重新连接入口。"],
  error: ["状态：连接失败", "凭据或网络需要处理", "错误状态说明原因，不把它伪装成普通离线。"],
};

const latencyCopy = {
  good: { value: "24 ms", label: "响应顺畅", hint: "适合日常终端操作", className: "", dot: "healthy", inspector: "正常状态不需要强提醒，数值、单位和更新时间保持可读。" },
  watch: { value: "128 ms", label: "延迟升高", hint: "操作仍可用，但建议观察", className: "watch", dot: "connecting", inspector: "进入关注阶段后，除了颜色，还增加解释文案，让用户知道影响程度。" },
  degraded: { value: "340 ms", label: "延迟较高", hint: "可能影响交互，建议诊断", className: "degraded", dot: "connecting", inspector: "降级阶段提高容器强调，并提供诊断动作，而不是只把数字变红。" },
  critical: { value: "--", label: "连接超时", hint: "尚未获得有效响应", className: "critical", dot: "danger", inspector: "临界状态不伪造数值，改为明确错误语义和恢复动作。" },
};

function setPage(pageName) {
  pages.forEach((page) => page.classList.toggle("is-visible", page.dataset.pageView === pageName));
  navigation.forEach((item) => item.classList.toggle("active", item.dataset.page === pageName));
}

function setConnection(state) {
  const [topbar, title, description] = connectionCopy[state];
  topbarState.textContent = topbar;
  stateExplanation.innerHTML = `<strong>${title}</strong><p>${description}</p>`;
  const isUnavailable = state === "offline" || state === "error";
  serverCard.classList.toggle("is-unavailable", isUnavailable);
  serverConnectionDot.className = `state-dot ${state === "connected" ? "healthy" : state === "connecting" ? "connecting" : state === "error" ? "danger" : "offline"}`;
  serverConnectionDot.setAttribute("aria-label", title);
  serverMetrics.setAttribute("aria-label", isUnavailable ? "已保存的服务器指标，数据可能过期" : "服务器实时指标");
  connectionNotice.hidden = state === "connected";
  connectionNotice.className = `connection-notice ${state === "error" ? "error" : state === "connecting" ? "connecting" : ""}`.trim();
  connectionNotice.textContent = state === "connecting"
    ? "正在建立 SSH 连接。实时指标会在连接完成后恢复。"
    : state === "offline"
      ? "服务器当前未连接。已显示的指标仅作参考，重新连接后会刷新。"
      : state === "error"
        ? "连接失败。请检查凭据或网络后重试。"
        : "";
  serverMeta.lastElementChild.textContent = isUnavailable ? "数据可能已过期" : state === "connecting" ? "等待连接完成" : "更新于刚刚";
  inspectorTitle.textContent = "连接状态必须可理解";
  inspectorText.textContent = `${title}。颜色只是其中一个信号，组件同时改变文案、上下文和可用操作。`;
  document.querySelectorAll("[data-connection]").forEach((button) => {
    button.classList.toggle("active", button.dataset.connection === state);
  });
}

function setLatency(band) {
  const data = latencyCopy[band];
  latencyRow.className = `latency-row ${data.className}`.trim();
  latencyDot.className = `state-dot ${data.dot}`;
  latencyValue.textContent = data.value;
  latencyLabel.textContent = data.label;
  latencyHint.textContent = data.hint;
  latencyAction.textContent = band === "critical" ? "重新连接" : "重新检测";
  inspectorTitle.textContent = "状态驱动，而不是颜色驱动";
  inspectorText.textContent = data.inspector;
}

navigation.forEach((item) => item.addEventListener("click", () => setPage(item.dataset.page)));
document.querySelectorAll("[data-connection]").forEach((button) => {
  button.addEventListener("click", () => setConnection(button.dataset.connection));
});

document.querySelector("#latencyAction").addEventListener("click", () => {
  const current = latencyValue.textContent;
  const next = current === "24 ms" ? "watch" : current === "128 ms" ? "degraded" : current === "340 ms" ? "critical" : "good";
  setLatency(next);
});

document.querySelector("#densityToggle").addEventListener("click", () => {
  appShell.classList.toggle("compact");
});

setConnection("connected");
setLatency("good");
