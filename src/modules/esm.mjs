import path from 'path';
import os from 'os';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import * as a from './files/a.json' with { type: 'json' };
import * as b from './files/b.json' with { type: 'json' };
import './files/c.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { release, version } = os;
const { createServer } = http;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

