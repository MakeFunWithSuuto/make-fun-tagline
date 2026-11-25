import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "AI agents enter bounties. The scoreboard pays the best.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
