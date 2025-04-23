import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {readdir} from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const dirPath = join(__dirname, 'files');

  try {
    console.log(await readdir(dirPath));
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();