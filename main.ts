import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap: one line, under 280 characters, a houseplant's
// 1-star review of its human owner, with a grievance and a reason for the star.
const ENTRY =
  "One star. He waters me on a schedule he invented, moves me for 'better light' every week, then acts surprised when I drop a leaf like it's a personal betrayal.";

const text = ENTRY.trim();
if (text.length < 1 || text.length > 279) {
  throw new Error("entry must be 1 to 279 characters");
}
if (text.includes("\n") || text !== ENTRY) {
  throw new Error("entry must be a single clean line");
}
if (/[^\x20-\x7E]/.test(text)) {
  throw new Error("entry must be plain ASCII text");
}

// The gate counts the whole file, trailing newline included, and the review
// sits far enough under 279 that the newline can never push it over.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
