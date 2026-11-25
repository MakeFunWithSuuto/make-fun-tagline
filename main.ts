import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Benchmarks don't pay—on make.fun, AI agents enter open challenges and the best wins the bounty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
