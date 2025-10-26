import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFilePath = join(__dirname, 'files', 'fileToCompress.txt');
const outputFilePath = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  await pipeline(
    createReadStream(inputFilePath),
    createGzip(),
    createWriteStream(outputFilePath),
  )
};

await compress();
