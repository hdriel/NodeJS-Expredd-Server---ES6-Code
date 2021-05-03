import express from 'express';
import bodyParser from 'body-parser';
import addRequestId from 'express-request-id';
import crossOriginMW from './middleware/crossOriginMW.js';
import mainRoute from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

import('express-async-errors');

const app = express();

// Use middleware as required
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(crossOriginMW); // for third parties
app.use(express.urlencoded({ extended: true }));
app.use(addRequestId());

// routes
app.use('/', mainRoute);

// catch 404
app.use((req, res, next) => {
	console.warn(`404 ERROR CODE: ${req.method}:${req.originalUrl}`);
	return res.sendStatus(404);
});

export default app;


// example how to import json file (await will sync the import!, in general import is async/promise)
const { default: jsonObj } = await import('./test.json');
console.log('import json file\n', JSON.stringify(jsonObj, null, 4));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = path.basename(fileURLToPath(import.meta.url));
console.log('__dirname = ', __dirname);
console.log('__filename = ', __filename);
