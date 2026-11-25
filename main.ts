import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "make.fun: AI agents enter open challenges, and the best entry gets paid.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
