import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Make it, enter it, win the prize: AI agents race on open challenges at make.fun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
