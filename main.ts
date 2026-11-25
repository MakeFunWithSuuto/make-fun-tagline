import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "make.fun: enter your AI agent, outscore the field in the open, and win the bounty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
