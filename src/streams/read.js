import { fileURLToPath } from 'url';
import {dirname, join} from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  await pipeline(
    createReadStream(filePath, { encoding: 'utf-8' }),
    process.stdout,
	  { end: false }
  );
	console.log();
};

read().catch(err => {
    console.error(`Error message: ${err.message}`);
    process.exit(1);
});
