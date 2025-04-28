import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const src = join(__dirname, 'files', 'archive.gz');
  const dest = join(__dirname, 'files', 'fileToCompress.txt');

  const readStream = createReadStream(src);
  const gzip = createGzip();
  const writeStream = createWriteStream(dest);

  try {
    await pipeline(
      readStream,
      gzip,
      writeStream,
    );
    console.log('File decompressed successfully!');
  } catch (err) {
    console.error('Decompression failed:', err);
    throw new Error('FS operation failed');
  }

};

await decompress();