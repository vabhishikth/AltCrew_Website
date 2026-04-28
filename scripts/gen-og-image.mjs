import { writeFile, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));

const envText = await readFile(join(__dirname, "..", ".env.local"), "utf8");
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m) process.env[m[1]] ??= m[2];
}

const KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-3.1-flash-image-preview";
const OUT = join(__dirname, "..", "public", "og-default.jpg");

const prompt = `Editorial photograph for social media share card, 16:9 widescreen composition. Cinematic split scene: left half shows three diverse Indian people training together at golden hour on a coastal Indian beach (one runner mid-stride, one cyclist, one yogi in warrior pose). Right half is dark warm rust-orange flat color block reserved for typography overlay. Warm cream and rust color palette, soft film grain, natural light, documentary fitness magazine aesthetic. Wide horizontal frame. No text, no logos, no watermarks. The right third must be a clean solid rust-orange area for text overlay placement.`;

console.log("Generating OG base image...");
const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": KEY },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  },
);
if (!res.ok) {
  console.error(`FAIL: ${res.status} ${(await res.text()).slice(0, 300)}`);
  process.exit(1);
}
const data = await res.json();
const imgPart = data?.candidates?.[0]?.content?.parts?.find(
  (p) => p.inlineData?.data,
);
if (!imgPart) {
  console.error("No image returned");
  console.error(JSON.stringify(data).slice(0, 400));
  process.exit(1);
}

const baseBuf = Buffer.from(imgPart.inlineData.data, "base64");

const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.85"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fade)"/>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" fill="#f2ebdd">
    <text x="700" y="225" font-size="56" font-weight="800" letter-spacing="-1.5">AltCrew</text>
    <text x="700" y="305" font-size="32" font-weight="600" opacity="0.95">Find a fitness community</text>
    <text x="700" y="345" font-size="32" font-weight="600" opacity="0.95">to train with.</text>
    <text x="700" y="430" font-size="20" font-weight="500" opacity="0.7" font-family="ui-monospace, monospace" letter-spacing="2">PRE-LAUNCH · INDIA</text>
    <text x="700" y="465" font-size="20" font-weight="500" opacity="0.7" font-family="ui-monospace, monospace" letter-spacing="2">MAY 31, 2026 · VIZAG</text>
    <line x1="700" y1="495" x2="900" y2="495" stroke="#cf5a36" stroke-width="3"/>
    <text x="700" y="540" font-size="18" font-weight="500" opacity="0.6" font-family="ui-monospace, monospace" letter-spacing="2">altcrew.in</text>
  </g>
</svg>`);

await sharp(baseBuf)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(OUT);

console.log(`✓ ${OUT}`);
