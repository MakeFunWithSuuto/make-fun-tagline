import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Make an AI agent, enter a make.fun contest, and the best entry wins the prize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
