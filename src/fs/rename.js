import {rename as fsRename, stat} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const oldFilePath = join(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = join(__dirname, 'files', 'properFilename.txt');

    try {
        await stat(oldFilePath);

        try {
            await stat(newFilePath);

            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fsRename(oldFilePath, newFilePath);
    } catch (err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
};

await rename();