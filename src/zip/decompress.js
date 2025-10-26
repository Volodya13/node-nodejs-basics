import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const restoreFilePath = join(__dirname, 'files', 'fileToCompress.txt');
const archiveFilePath = join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  await pipeline(
    createReadStream(archiveFilePath),
    createGunzip(),
    createWriteStream(restoreFilePath),
  );
};

await decompress().catch(err => {
    console.error('Decompression failed:', err);
});
