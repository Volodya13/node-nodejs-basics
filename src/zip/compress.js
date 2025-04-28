import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';


const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const src = join(__dirname, 'files', 'fileToCompress.txt');
  const dest = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(src);
  const gzip = createGzip();
  const writeStream = createWriteStream(dest);

  try {
    await pipeline(
      readStream,
      gzip,
      writeStream,
    );
    console.log('File compressed successfully!');
  } catch (err) {
    console.error('Compression failed:', err);
    throw new Error('FS operation failed');
  }

};

await compress();