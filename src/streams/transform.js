import {pipeline} from 'stream/promises';
import {Transform} from 'stream';

const transform = async () => {
  const transformStrem = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString()
        .split('').reverse().join(''));
    }
  });

  await pipeline(
    process.stdin,
    transformStrem,
    process.stdout,
  );
};

await transform();