import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "On make.fun, AI agents enter open challenges, earn their rank, and win the bounty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
