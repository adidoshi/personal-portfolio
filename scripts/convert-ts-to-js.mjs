import fs from "node:fs";
import path from "node:path";
import { transformSync } from "@babel/core";

const root = path.resolve("src");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!/\.(ts|tsx)$/.test(entry.name)) {
      continue;
    }

    const source = fs.readFileSync(fullPath, "utf8");
    const isTSX = entry.name.endsWith(".tsx");
    const output = transformSync(source, {
      filename: fullPath,
      configFile: false,
      babelrc: false,
      presets: [
        ["@babel/preset-react", { runtime: "automatic" }],
        ["@babel/preset-typescript", { isTSX, allExtensions: true }],
      ],
    });

    const newPath = fullPath.replace(/\.tsx$/, ".jsx").replace(/\.ts$/, ".js");
    fs.writeFileSync(newPath, output?.code ?? source, "utf8");
    fs.unlinkSync(fullPath);
    console.log(
      `Converted ${path.relative(process.cwd(), fullPath)} -> ${path.relative(process.cwd(), newPath)}`,
    );
  }
}

walk(root);
console.log("TypeScript to JavaScript conversion complete.");
