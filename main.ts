import { mkdirSync, writeFileSync } from "node:fs";

// The entry line must stay byte-for-byte: single line, no trailing newline.
const LINE =
  "I'm out of office. My houseplant is answering emails — it watered itself twice and already asked for a raise.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
