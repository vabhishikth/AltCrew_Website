import sharp from "sharp";
import { readdir, stat, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIR = join(__dirname, "..", "public", "portraits");

const files = (await readdir(DIR)).filter((f) => /^0[1-4]-.*\.jpg$/.test(f));

for (const f of files) {
  const path = join(DIR, f);
  const before = (await stat(path)).size;
  const src = await readFile(path);
  const out = await sharp(src)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toBuffer();
  await writeFile(path, out);
  const after = (await stat(path)).size;
  console.log(
    `${f}: ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB`,
  );
}
