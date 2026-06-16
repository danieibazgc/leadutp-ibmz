/**
 * convert-to-webp.mjs
 * Converts target PNG images to WebP at quality 90 (lossy).
 * Falls back to lossless if WebP output is larger than the original.
 *
 * Usage: node scripts/convert-to-webp.mjs
 */

import sharp from 'sharp';
import { readFileSync, statSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const TARGETS = [
  'public/images/bg-texture.png',
  'public/images/ibm-bob-character.png',
  'public/images/ibm-z-logo.png',
  'public/images/lead-utp-logo.png',
  'public/images/speaker-photo.png',
];

const QUALITY = 90;

async function convertToWebp(relPath) {
  const inputPath  = resolve(root, relPath);
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

  if (!existsSync(inputPath)) {
    console.error(`  ❌  NOT FOUND: ${relPath}`);
    return;
  }

  const originalSize = statSync(inputPath).size;

  // First attempt: lossy Q90
  await sharp(inputPath)
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(outputPath);

  const lossySize = statSync(outputPath).size;

  // If lossy WebP is larger than original, re-encode as lossless
  if (lossySize > originalSize) {
    console.warn(`  ⚠️  Lossy WebP (${kb(lossySize)}) > original (${kb(originalSize)}). Re-encoding as lossless…`);
    await sharp(inputPath)
      .webp({ lossless: true, effort: 6 })
      .toFile(outputPath);
    const losslessSize = statSync(outputPath).size;
    console.log(`  ✅  ${relPath.padEnd(48)} ${kb(originalSize).padStart(8)} → ${kb(losslessSize).padStart(8)}  (lossless)`);
  } else {
    const saving = (((originalSize - lossySize) / originalSize) * 100).toFixed(1);
    console.log(`  ✅  ${relPath.padEnd(48)} ${kb(originalSize).padStart(8)} → ${kb(lossySize).padStart(8)}  (-${saving}%)`);
  }
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

console.log('\n🚀  Starting WebP conversion (Q90 lossy)…\n');

try {
  for (const target of TARGETS) {
    await convertToWebp(target);
  }
  console.log('\n✅  All conversions complete. Review the output above before updating code references.\n');
} catch (err) {
  console.error('\n❌  Conversion failed:', err.message);
  if (err.message.includes("Cannot find module 'sharp'")) {
    console.error('   → Run: npm install sharp --save-dev\n');
  }
  process.exit(1);
}
