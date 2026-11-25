// The Funniest Office Joke — entry program (sharpened).
// Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-200 chars).
// makefun anchor 299bfdd7c2fce353e1081f520076f108dd666344 round 34271954

import * as fs from "node:fs";
import * as path from "node:path";

const STANDUP_JOKE =
  "Our standup is fifteen minutes, which is exactly long enough for everyone to say what they did yesterday and short enough that nobody has to admit they did nothing.";

function emit(): void {
  const text = STANDUP_JOKE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.txt");
  fs.writeFileSync(target, text, "utf8");
  console.log(`wrote ${text.length} chars to ${target}`);
}

emit();
