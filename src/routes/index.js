import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
	console.log(req.originalUrl);
	next();
});

router.get('/health', (req, res) => res.json({ message: 'OK' }));

router.get('/', (req, res) => {
	// eslint-disable-next-line no-debugger
	debugger;
	res.send('Hello World');
});

export default router;
