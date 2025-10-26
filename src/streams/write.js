import { fileURLToPath } from 'url';
import {dirname, join} from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  await pipeline(
    process.stdin,
    createWriteStream(filePath, {flags: 'a', encoding: 'utf-8'}),
  )
};

await write().catch(err => {
  console.error(`Error message: ${err.message}`);
  process.exit(1);
});
