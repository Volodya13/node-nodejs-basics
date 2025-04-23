import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
  
  const content = await readFile(filePath);
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();