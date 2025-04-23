import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = `${__dirname}/files/fileToWrite.txt`;

  try {
    await pipeline(
      process.stdin,
      createWriteStream(filePath, {flags: 'a', encoding: 'utf-8'}),
    );
  } catch (err) {
    throw new Error(`Error writing file: ${err.message}`);
  }
};

await write();