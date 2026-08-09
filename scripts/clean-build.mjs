#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
rmSync(path.join(root, "dist", "client"), { recursive: true, force: true });

const deployedResume = path.join(root, "portfolio", "amin-sakha-resume.pdf");
const buildResume = path.join(root, "public", "portfolio", "amin-sakha-resume.pdf");
if (!existsSync(buildResume) && existsSync(deployedResume)) {
  mkdirSync(path.dirname(buildResume), { recursive: true });
  copyFileSync(deployedResume, buildResume);
}
