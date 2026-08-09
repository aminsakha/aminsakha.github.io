#!/usr/bin/env node
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const client = path.join(root, "dist", "client");
const generatedDirectories = ["ai", "assets", "fa", "images", "portfolio"];
const generatedFiles = ["index.html", "robots.txt", "sitemap.xml"];

if (!existsSync(path.join(client, "index.html"))) {
  throw new Error("Missing dist/client/index.html. Run the production build first.");
}

for (const directory of generatedDirectories) {
  rmSync(path.join(root, directory), { recursive: true, force: true });
}

for (const file of generatedFiles) {
  rmSync(path.join(root, file), { force: true });
}

for (const entry of readdirSync(client, { withFileTypes: true })) {
  const source = path.join(client, entry.name);
  const destination = path.join(root, entry.name);

  if (entry.isDirectory()) {
    mkdirSync(destination, { recursive: true });
    cpSync(source, destination, { recursive: true });
  } else {
    copyFileSync(source, destination);
  }
}

console.log("Prepared GitHub Pages output in the repository root.");
