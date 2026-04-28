import { writeFile, mkdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const envText = await readFile(join(__dirname, "..", ".env.local"), "utf8");
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m) process.env[m[1]] ??= m[2];
}

const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("GEMINI_API_KEY missing in .env.local");
  process.exit(1);
}

const MODEL = "gemini-3.1-flash-image-preview";
const OUT_DIR = join(__dirname, "..", "public", "portraits");

const tiles = [
  {
    file: "01-run.jpg",
    prompt:
      "Documentary photograph, golden hour at 6am on RK Beach Visakhapatnam India. Single Indian runner, mid-20s, athletic build, rust-colored running shirt, mid-stride on wet sand at the shoreline. Bay of Bengal waves softly breaking behind. Warm rust-orange and cream color palette, soft film grain, natural light, slight motion blur on legs. Editorial fitness magazine aesthetic. Vertical 3:4 portrait. No text, no logos.",
  },
  {
    file: "02-yoga.jpg",
    prompt:
      "Documentary photograph, sunrise on a concrete rooftop in coastal India. Single woman, mid-30s, South Indian, in warrior II yoga pose on a cream-colored mat. Wearing earth-tone activewear. Soft warm light, distant palm trees and low-rise buildings hazy in background. Muted cream and taupe color palette, film grain, natural light, calm atmosphere. Editorial wellness magazine aesthetic. Vertical 3:4 portrait. No text, no logos.",
  },
  {
    file: "03-lift.jpg",
    prompt:
      "Documentary photograph, dim home gym in Indian apartment, weekday morning. Indian man, late-20s, muscular, lifting a black kettlebell in a goblet squat hold. Concrete floor, single warm overhead lamp, dark olive walls. Lime-green accent on his t-shirt. Earthy tones, dramatic single-source lighting, film grain, focused expression. Editorial strength training aesthetic. Vertical 3:4 portrait. No text, no logos.",
  },
  {
    file: "04-cycle.jpg",
    prompt:
      "Documentary photograph, winding hilltop road on Kailasagiri Visakhapatnam, late afternoon. Indian cyclist, 30s, on a road bike, cresting the climb with city and Bay of Bengal visible far below. Cream jersey, dark olive-green helmet. Hazy warm coastal light, film grain, lush green hill in foreground. Editorial cycling magazine aesthetic. Vertical 3:4 portrait. No text, no logos.",
  },
];

await mkdir(OUT_DIR, { recursive: true });

for (const tile of tiles) {
  console.log(`Generating ${tile.file}...`);
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: tile.prompt }] }],
      }),
    },
  );

  if (!res.ok) {
    const t = await res.text();
    console.error(`  FAIL ${tile.file}: ${res.status} ${t.slice(0, 300)}`);
    continue;
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.data);
  if (!imgPart) {
    console.error(`  No image in response for ${tile.file}`);
    console.error(JSON.stringify(data).slice(0, 400));
    continue;
  }
  const buf = Buffer.from(imgPart.inlineData.data, "base64");
  await writeFile(join(OUT_DIR, tile.file), buf);
  console.log(`  ✓ ${tile.file} (${(buf.length / 1024).toFixed(1)} KB)`);
}

console.log("Done.");
