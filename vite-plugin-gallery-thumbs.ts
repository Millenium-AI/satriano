// vite-plugin-gallery-thumbs.ts
//
// Automatically generates WebP thumbnails for every image in src/assets/gallery/
// every time you run `npm run dev` or `npm run build`. Drop a new photo in that
// folder and a matching thumbnail appears in src/assets/gallery/thumbs/ the next
// time the dev server or build starts — no manual step required.
//
// Requires: npm install -D sharp

import type { Plugin } from 'vite';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const GALLERY_DIR = join(process.cwd(), 'src/assets/gallery');
const THUMBS_DIR = join(GALLERY_DIR, 'thumbs');
const THUMB_WIDTH = 480; // pixels — adjust to match your grid tile size
const SOURCE_EXT = /\.(jpe?g|png)$/i;

async function generateThumbs() {
  // sharp is imported lazily so the plugin doesn't crash projects that
  // haven't installed it yet — it just logs a warning and skips thumbnailing.
  let sharp: typeof import('sharp');
  try {
    sharp = (await import('sharp')).default as unknown as typeof import('sharp');
  } catch {
    console.warn(
      '[gallery-thumbs] "sharp" is not installed — skipping thumbnail generation.\n' +
      '  Run: npm install -D sharp'
    );
    return;
  }

  if (!existsSync(GALLERY_DIR)) return;
  if (!existsSync(THUMBS_DIR)) mkdirSync(THUMBS_DIR, { recursive: true });

  const files = readdirSync(GALLERY_DIR).filter(
    (f) => SOURCE_EXT.test(f) && statSync(join(GALLERY_DIR, f)).isFile()
  );

  let generated = 0;

  for (const file of files) {
    const srcPath = join(GALLERY_DIR, file);
    const thumbName = `${basename(file, extname(file))}.webp`;
    const thumbPath = join(THUMBS_DIR, thumbName);

    // Skip if thumbnail already exists and is newer than the source image
    if (existsSync(thumbPath)) {
      const srcTime = statSync(srcPath).mtimeMs;
      const thumbTime = statSync(thumbPath).mtimeMs;
      if (thumbTime >= srcTime) continue;
    }

    try {
      await sharp(srcPath)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(thumbPath);
      generated++;
    } catch (err) {
      console.warn(`[gallery-thumbs] Failed to process ${file}:`, err);
    }
  }

  if (generated > 0) {
    console.log(`[gallery-thumbs] Generated ${generated} thumbnail(s) in src/assets/gallery/thumbs/`);
  }
}

export default function galleryThumbsPlugin(): Plugin {
  return {
    name: 'gallery-thumbs',
    // Runs once when the dev server starts, and once before a production build
    async buildStart() {
      await generateThumbs();
    },
  };
}
