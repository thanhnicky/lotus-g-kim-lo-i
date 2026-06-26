import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../src/assets');
const OUTPUT_DIR = join(__dirname, '../src/assets/optimized');

// Responsive widths for different breakpoints
const WIDTHS = [640, 750, 828, 1080, 1200, 1920];

// Images to optimize with their target widths
const IMAGES_TO_OPTIMIZE = [
  {
    source: 'son-gia-go-tren-cong-sat-lotus.jpeg',
    name: 'hero',
    widths: WIDTHS,
    quality: 85,
  },
  {
    source: 'app-pergola.jpg',
    name: 'app-pergola',
    widths: [640, 750, 828, 1080, 1200],
    quality: 75,
  },
  {
    source: 'app-door.jpg',
    name: 'app-door',
    widths: [640, 750, 828, 1080],
    quality: 75,
  },
  {
    source: 'bang-mau-son-gia-go-tren-sat-lotus.png',
    name: 'bang-mau',
    widths: [640, 750, 828, 1080, 1200],
    quality: 80,
  },
  {
    source: 'khung-keo-thep-gia-go-lotus.jpg',
    name: 'khung-keo',
    widths: [640, 750, 828, 1080],
    quality: 75,
  },
  {
    source: 'sat-gia-go-ash-lotus.jpg',
    name: 'sat-ash',
    widths: [640, 750, 828, 1080],
    quality: 75,
  },
  {
    source: 'son-sat-gia-go-gian-hoa.jpg',
    name: 'gian-hoa',
    widths: [640, 750, 828],
    quality: 75,
  },
  {
    source: 'ban-ghe-sat-gia-go-ngoai-troi.jpg',
    name: 'ban-ghe',
    widths: [640, 750, 828, 1080],
    quality: 75,
  },
  {
    source: 'hang-rao-son-gia-go-lotus.jpeg',
    name: 'hang-rao',
    widths: [640, 750, 828],
    quality: 75,
  },
  {
    source: 'logo-lotus-paint-35325.jpg',
    name: 'logo',
    widths: [150, 300],
    quality: 90,
  },
];

async function ensureOutputDir() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function optimizeImage(imageConfig) {
  const { source, name, widths, quality } = imageConfig;
  const inputPath = join(ASSETS_DIR, source);

  console.log(`\nProcessing: ${source}`);

  for (const width of widths) {
    const outputPath = join(OUTPUT_DIR, `${name}-${width}w.webp`);
    
    try {
      await sharp(inputPath)
        .resize(width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality })
        .toFile(outputPath);
      
      const stats = await sharp(outputPath).metadata();
      console.log(`  ✓ Created: ${name}-${width}w.webp (${Math.round(stats.size / 1024)}KB)`);
    } catch (error) {
      console.error(`  ✗ Error creating ${name}-${width}w.webp:`, error.message);
    }
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');

  await ensureOutputDir();

  for (const imageConfig of IMAGES_TO_OPTIMIZE) {
    await optimizeImage(imageConfig);
  }

  console.log('\n✅ Optimization complete!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

main().catch(console.error);
