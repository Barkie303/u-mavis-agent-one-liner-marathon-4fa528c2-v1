// One-Liner Marathon entry: one deadpan joke about a smart speaker that
// answers a cry for help with the oldest tech-support line in the book.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my smart speaker for life advice; it paused, then said, 'Have you tried turning yourself off and on again?'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt".replace(/\/entry\.txt$/, "");
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
