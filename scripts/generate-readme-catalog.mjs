import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const readmePath = path.join(repoRoot, "README.md");
const skillsDir = path.join(repoRoot, "claude-code-arsenal", "skills");
const agentsDir = path.join(repoRoot, "claude-code-arsenal", "agents");

const START = "<!-- CATALOG:START -->";
const END = "<!-- CATALOG:END -->";

const parseFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = match[1];
  const data = {};
  for (const line of fm.split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value.replace(/^"|"$/g, "");
  }
  return data;
};

const mdEscape = (text) => text.replace(/\|/g, "\\|").replace(/\r?\n/g, " ").trim();

const buildRows = async (dir, ext) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const rows = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const filePath = path.join(dir, entry.name, "SKILL.md");
      try {
        const content = await readFile(filePath, "utf8");
        const fm = parseFrontmatter(content);
        const name = fm.name || entry.name;
        const description = fm.description || "Sin descripcion.";
        rows.push({ name, description });
      } catch {
        rows.push({ name: entry.name, description: "Sin descripcion." });
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(ext)) {
      const filePath = path.join(dir, entry.name);
      const content = await readFile(filePath, "utf8");
      const fm = parseFrontmatter(content);
      const name = fm.name || entry.name.replace(ext, "");
      const description = fm.description || "Sin descripcion.";
      rows.push({ name, description });
    }
  }

  return rows.sort((a, b) => a.name.localeCompare(b.name));
};

const toTable = (items) => {
  const header = "| Nombre | Para que sirve |\n|---|---|";
  const body = items
    .map((item) => `| \`${mdEscape(item.name)}\` | ${mdEscape(item.description)} |`)
    .join("\n");
  return `${header}\n${body}`;
};

const skills = await buildRows(skillsDir, ".md");
const agents = await buildRows(agentsDir, ".md");

const section = [
  START,
  "## Catalogo completo",
  "",
  `Skills detectadas: **${skills.length}**  `,
  `Agentes detectados: **${agents.length}**`,
  "",
  "### Skills",
  "",
  "<details>",
  "<summary>Ver todas las skills</summary>",
  "",
  toTable(skills),
  "",
  "</details>",
  "",
  "### Agentes",
  "",
  "<details>",
  "<summary>Ver todos los agentes</summary>",
  "",
  toTable(agents),
  "",
  "</details>",
  END,
].join("\n");

const readme = await readFile(readmePath, "utf8");

let next;
if (readme.includes(START) && readme.includes(END)) {
  next = readme.replace(new RegExp(`${START}[\\s\\S]*?${END}`), section);
} else {
  next = `${readme}\n\n${section}\n`;
}

await writeFile(readmePath, next, "utf8");
console.log(`Catalog updated. Skills: ${skills.length}. Agents: ${agents.length}.`);