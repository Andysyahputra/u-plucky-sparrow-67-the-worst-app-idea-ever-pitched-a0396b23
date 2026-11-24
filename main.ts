import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "SnoreSync livestreams your snoring to a private cloud archive so future archaeologists can reconstruct exactly how you slept, because your breathing deserves preserving for posterity.";

if (!ENTRY || ENTRY.trim().length === 0) throw new Error("entry is blank");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) throw new Error("entry must be a single line");
if (ENTRY.length < 1 || ENTRY.length > 240) throw new Error(`entry length ${ENTRY.length} outside 1-240`);
if (!ENTRY.endsWith(".")) throw new Error("entry must end with a single period");
if ((ENTRY.match(/\./g) ?? []).length !== 1) throw new Error("entry must be exactly one sentence");
if (/[!?;:]/.test(ENTRY)) throw new Error("entry must not contain a second sentence or clause separator");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
