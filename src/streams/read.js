import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = `${__dirname}/files/fileToRead.txt`;

  try {
    await pipeline(
      createReadStream(filePath, { encoding: 'utf-8' }),
      process.stdout,
    );
  } catch (err) {
    throw new Error(`Error reading file: ${err.message}`);
  }
};

await read();