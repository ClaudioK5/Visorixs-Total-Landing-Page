import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const home = {
  title: "Visorix — Turn video into useful intelligence",
  description:
    "Visorix analyzes the actual video and turns that understanding into specialized work — find moments, summarize recordings, improve content, and extract what matters.",
  url: "https://visorixs.tech/",
};

const pages = [
  {
    path: "podcasters",
    title: "Visorix for Podcasts — Understand an entire podcast without rewatching it",
    description:
      "Upload a podcast episode and let Visorix find discussions, timestamps, summaries, highlights and answers — without rewatching the recording.",
    url: "https://visorixs.tech/podcasters",
  },
  {
    path: "creators",
    title: "Visorixs — Your AI creator consultant for every Reel",
    description:
      "Visorixs — upload your Reel or TikTok and get specific, professional-style feedback based on the real content of your video.",
    url: "https://visorixs.tech/creators",
  },
  {
    path: "pricing",
    title: "Visorix — Pricing",
    description:
      "Simple pricing for the way you work with video. Choose a plan based on how much video you analyze each month.",
    url: "https://visorixs.tech/pricing",
  },
];

const dist = fileURLToPath(new URL("../dist/index.html", import.meta.url));
const html = readFileSync(dist, "utf8");

for (const page of pages) {
  const next = html
    .replaceAll(`<title>${home.title}</title>`, `<title>${page.title}</title>`)
    .replaceAll(`content="${home.description}"`, `content="${page.description}"`)
    .replaceAll(`content="${home.title}"`, `content="${page.title}"`)
    .replaceAll(`content="${home.url}"`, `content="${page.url}"`);

  const file = fileURLToPath(new URL(`../dist/${page.path}/index.html`, import.meta.url));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, next);
}
