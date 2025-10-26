import {dirname, join} from "path";
import {fileURLToPath} from "url";
import {readdir} from "fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    try {
        console.log(await readdir(join(__dirname, 'files')));
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
};

await list();
