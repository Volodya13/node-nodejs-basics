import {fork} from 'child_process';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
	const childProcess = fork(filePath, args, { stdio: ['pipe', 'pipe', 'inherit', 'ipc'] });
	
	process.stdin.pipe(childProcess.stdin);
	childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /*['someArgument1', 'someArgument2', 'someArgument3']*/);
