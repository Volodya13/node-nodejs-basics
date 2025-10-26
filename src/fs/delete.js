import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {rm} from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await remove();
