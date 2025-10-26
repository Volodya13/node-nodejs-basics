import {cpus} from 'os';
import {Worker} from 'worker_threads';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workers = cpus().length;
const filePath = join(__dirname, 'worker.js');

const performCalculations = async () => {
	const promises = [];
	
	for (let i = 0; i < workers; i++) {
		const workerPromise = new Promise((resolve) => {
			const worker = new Worker(filePath, {
				workerData: 10 + i,
				type: 'module',
			});
			worker.on('message', (result) => {
				resolve({
					status: 'resolved',
					data: result,
				});
			});
			worker.on('error', () => {
				resolve({
					status: 'error',
					data: null,
				});
			});
			worker.on('exit', (code) => {
				if (code !== 0) {
					resolve({
						status: 'error',
						data: null,
					});
				}
			});
		})
		
		promises.push(workerPromise);
	}
	
	const results = await Promise.all(promises);
	console.log(results);
};

await performCalculations();
