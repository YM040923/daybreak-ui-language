import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const html = await readFile(new URL("../demo/index.html", import.meta.url), "utf8");
const js = await readFile(new URL("../demo/app.js", import.meta.url), "utf8");

for (const marker of [
  'data-page-view="servers"',
  'data-page-view="settings"',
  'id="latencyAction"',
  'id="connectionNotice"',
  'data-connection="error"',
]) {
  assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `missing ${marker}`);
}

for (const marker of ["setPage", "setConnection", "setLatency", "latencyCopy"]) {
  assert.match(js, new RegExp(`\\b${marker}\\b`), `missing ${marker}`);
}

console.log("Daybreak demo checks passed.");
