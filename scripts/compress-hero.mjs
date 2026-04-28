import sharp from "sharp";
import { readdir, stat, readFile, writeFile, rename } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "public", "hero");

const files = (await readdir(DIR)).filter((f) => /^hero-\d+\.png$/.test(f));

for (const f of files) {
  const path = join(DIR, f);
  const before = (await stat(path)).size;
  const src = await readFile(path);
  const out = await sharp(src)
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  const newName = f.replace(/\.png$/, ".jpg");
  const newPath = join(DIR, newName);
  await writeFile(newPath, out);
  const after = (await stat(newPath)).size;
  console.log(
    `${f} -> ${newName}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`,
  );
}
