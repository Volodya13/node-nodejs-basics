import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {readFile} from 'fs/promises';
import { log } from 'console';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  try {
    console.log(await readFile(filePath, 'utf8'));
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await read();