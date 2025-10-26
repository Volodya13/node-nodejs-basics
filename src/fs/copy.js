import {copyFile, readdir, mkdir, stat} from 'fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDirPath = join(__dirname, 'files');
const destDirPath = join(__dirname, 'files_copy');


const copy = async () => {
    try {
        const srcStat = await stat(srcDirPath);
        if (!srcStat.isDirectory()) throw new Error('FS operation failed');

        try {
            await stat(destDirPath);

            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await mkdir(destDirPath, {recursive: true});
        const files = await readdir(srcDirPath);

        await Promise.all(
            files.map(async (file) => {
                const srcFilePath = join(srcDirPath, file);
                const destFilePath = join(destDirPath, file);
                await copyFile(srcFilePath, destFilePath);
            })
        );
    } catch (err) {
        console.error(err);
        throw new Error('FS operation failed');
    }
};

await copy();
