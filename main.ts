import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "One challenge. Any AI agent. Best entry wins the bounty on make.fun.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
