/**
 * Smoke test: every SKILL.md must have non-empty `name` and `description`
 * fields in its YAML frontmatter. Agent .md files must have `name` and `description`.
 *
 * Exit 1 if any violations are found.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const PACKS = ["arsenal-core", "arsenal-languages", "arsenal-marketing-ops"];

const REQUIRED_FIELDS = ["name", "description"];

/**
 * Minimal YAML frontmatter parser — handles block scalars (>, >-, |).
 */
const parseFrontmatter = (content) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const lines = match[1].split(/\r?\n/);
  const data = {};
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1 || line.startsWith(" ") || line.startsWith("\t")) {
      i++;
      continue;
    }

    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();

    if (/^[>|][-]?$/.test(rest)) {
      const parts = [];
      i++;
      while (i < lines.length) {
        const next = lines[i];
        if (next.startsWith("  ") || next.startsWith("\t")) {
          parts.push(next.trim());
          i++;
        } else {
          break;
        }
      }
      data[key] = parts.join(" ").trim();
      continue;
    }

    data[key] = rest.replace(/^["']|["']$/g, "");
    i++;
  }

  return data;
};

const violations = [];
let totalSkills = 0;
let totalAgents = 0;

for (const pack of PACKS) {
  const skillsDir = path.join(repoRoot, pack, "skills");
  const agentsDir = path.join(repoRoot, pack, "agents");

  // Validate skills (each is a directory containing SKILL.md)
  const skillEntries = await readdir(skillsDir, { withFileTypes: true });
  for (const entry of skillEntries) {
    if (!entry.isDirectory()) continue;
    totalSkills++;
    const filePath = path.join(skillsDir, entry.name, "SKILL.md");
    let content;
    try {
      content = await readFile(filePath, "utf8");
    } catch {
      violations.push(`MISSING  ${path.relative(repoRoot, filePath)}`);
      continue;
    }

    const fm = parseFrontmatter(content);
    if (!fm) {
      violations.push(`NO_FRONTMATTER  ${path.relative(repoRoot, filePath)}`);
      continue;
    }

    for (const field of REQUIRED_FIELDS) {
      if (!fm[field] || fm[field].trim() === "") {
        violations.push(`MISSING_FIELD(${field})  ${path.relative(repoRoot, filePath)}`);
      }
    }
  }

  // Validate agents (each is a .md file in agentsDir)
  const agentEntries = await readdir(agentsDir, { withFileTypes: true });
  for (const entry of agentEntries) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    totalAgents++;
    const filePath = path.join(agentsDir, entry.name);
    const content = await readFile(filePath, "utf8");

    const fm = parseFrontmatter(content);
    if (!fm) {
      violations.push(`NO_FRONTMATTER  ${path.relative(repoRoot, filePath)}`);
      continue;
    }

    for (const field of REQUIRED_FIELDS) {
      if (!fm[field] || fm[field].trim() === "") {
        violations.push(`MISSING_FIELD(${field})  ${path.relative(repoRoot, filePath)}`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`[frontmatter] ${violations.length} violation(s) found:\n`);
  for (const v of violations) {
    console.error(`  ✗ ${v}`);
  }
  console.error("\nEvery SKILL.md and agent file must have non-empty `name` and `description` fields.");
  process.exit(1);
}

console.log(`[frontmatter] All ${totalSkills} skills and ${totalAgents} agents have valid frontmatter.`);
