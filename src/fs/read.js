import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {readFile} from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    console.log(await readFile(join(__dirname, 'files', 'fileToRead.txt') , 'utf8'))
  } catch (err) {
    console.log(err);
    throw new Error('FS operation failed');
  }
};

await read();
