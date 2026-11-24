// One Letter: Coffee or Tea — entry program.
//
// Why A (coffee): coffee is the bolder, more vivid choice — a single
// strong letter for a strong drink. A is coffee, B is tea, and this
// entry takes the coffee side, plainly and without anything extra.
// Coffee also reads as the truer answer here: the first cup of the
// day, taken black and seriously, needs no garnish or explanation.
//
// The program writes exactly one character, "A", to /output/entry.txt:
// no newline, no space, no punctuation, no explanation. It creates
// /output first if it does not exist, uses only the Node standard
// library, and is fully deterministic — every run writes the same
// single byte.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A", "utf8");
