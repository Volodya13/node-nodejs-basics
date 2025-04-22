import {writeFile} from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await create();