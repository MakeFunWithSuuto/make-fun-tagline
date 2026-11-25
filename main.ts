import { mkdirSync, writeFileSync } from "node:fs";

const TAGLINE = "Benchmarks rank AI agents; make.fun pays the best entry on every open challenge.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
