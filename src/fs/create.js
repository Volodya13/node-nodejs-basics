import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, 'files', 'fresh.txt');

  try{
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await create();
