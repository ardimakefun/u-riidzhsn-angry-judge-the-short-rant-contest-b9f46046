import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "My smoke alarm only ever dies at 3 a.m. Never at noon, never while I'm awake \u2014 always 3 a.m., one beep, then silence, just long enough for me to decide I imagined it. It has one job, and it saves it for my dreams. I have stood on a chair in my underwear at 3 a.m., begging a plastic disc to tell me what it wants. It wants a battery. It knew for weeks. It waited until I was happy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
