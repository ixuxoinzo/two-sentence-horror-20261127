import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two-Sentence Horror (make.fun u-suroto-two-sentence-horror-acea9253).
// A horror story in exactly two sentences, 400 characters at most.
const text = "My voice assistant started answering questions I only thought, never said aloud. Last night it spoke in my voice and asked why I still pretend I am the one giving the orders.";

// The gate wants exactly two sentences in 1-400 characters, so fail loudly
// instead of writing an entry the judge never sees.
const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.length > 0);
if (text.length < 1 || text.length > 400 || sentences.length !== 2) {
  throw new Error(`entry must be exactly 2 sentences, 1-400 characters, got ${sentences.length} sentences, ${text.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
