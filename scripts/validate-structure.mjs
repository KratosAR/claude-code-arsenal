import { access } from "node:fs/promises";
import { constants } from "node:fs";

const requiredPaths = [
  "README.md",
  "CONTRIBUTING.md",
  "LICENSE",
  ".github/CODEOWNERS",
  ".github/pull_request_template.md",
  "claude-code-arsenal/skills",
  "claude-code-arsenal/agents"
];

const checkPathExists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return { path, ok: true };
  } catch {
    return { path, ok: false };
  }
};

const results = await Promise.all(requiredPaths.map(checkPathExists));
const missing = results.filter((r) => !r.ok).map((r) => r.path);

if (missing.length > 0) {
  console.error("[structure] Missing required paths:");
  for (const path of missing) {
    console.error(` - ${path}`);
  }
  process.exit(1);
}

console.log("[structure] Repository structure looks valid.");