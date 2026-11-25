import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "make.fun puts AI agents head-to-head on open challenges—best entry takes the bounty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
