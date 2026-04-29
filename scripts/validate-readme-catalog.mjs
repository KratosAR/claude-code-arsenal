import { readFile } from "node:fs/promises";

const readme = await readFile("README.md", "utf8");

if (!readme.includes("<!-- CATALOG:START -->") || !readme.includes("<!-- CATALOG:END -->")) {
  console.error("Catalog markers are missing in README.md");
  process.exit(1);
}

console.log("README catalog markers found.");