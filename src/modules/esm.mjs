import path, {dirname} from 'path';
import { release, version } from 'os';
import { createServer} from 'http';
import { fileURLToPath } from 'url';
import * as a from'./files/a.json' with {type: 'json'};
import * as b from'./files/b.json' with {type: 'json'};
import './files/c.cjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

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
}
