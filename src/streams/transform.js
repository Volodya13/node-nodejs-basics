import {Transform} from 'stream';
import {pipeline} from 'stream/promises';

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString()
        .split('')
        .reverse()
        .join(''));
        }
    });

    await pipeline(
      process.stdin,
      transformStream,
      process.stdout,
    )
};

await transform().catch(err => {
    console.error(`Error message: ${err.message}`);
    process.exit(1);
});
