import http from 'http';

// In ES6 import for import local files (not node_modules) - must mention the suffix file name, like .js
import app from './app.js';

const server = http.createServer(app);

const PORT = 4000;
server.listen(PORT, async () => {
	console.log(`Listening to http://localhost:${PORT}/`);
});

server.on('uncaughtException', (req, res, next, err) => {
	console.log(`UncaughtException : ${err.stack || err}`);
	return res.status(500).send(err.message);
});

server.on('error', (err) => {
	console.error(`server.on Error : ${err.stack || err}'`);
	process.exit(1);
});

// get the unhandled rejection and throw it to another fallback handler we already have.
process.on('unhandledRejection', (reason, p) => {
	console.error(`=== UNHANDLED REJECTION === \nUnhandled Rejection at: Promise '${JSON.stringify(p, null, 4)}' \nreason: '${reason}'`);
	throw reason;
});

// Stop process killing on exceptions
process.on('uncaughtException', (error) => {
	console.error(`uncaughtException error: ${error}`);
});
