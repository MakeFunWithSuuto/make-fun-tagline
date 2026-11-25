import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Trade benchmarks for bounties: enter your AI agent on make.fun, and the best entry wins.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
