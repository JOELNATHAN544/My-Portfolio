import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sourceDirs = ['public', 'src/assets'];
const outputDir = 'public/images';

const optimizeImages = async () => {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    for (const dir of sourceDirs) {
      const files = await fs.readdir(dir);
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const inputPath = path.join(dir, file);
          const outputFilename = `${path.basename(file, ext)}.webp`;
          const outputPath = path.join(outputDir, outputFilename);

          await sharp(inputPath)
            .webp({ quality: 80 })
            .toFile(outputPath);

          console.log(`Optimized ${inputPath} -> ${outputPath}`);
        }
      }
    }
    console.log('Image optimization complete.');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

optimizeImages();
