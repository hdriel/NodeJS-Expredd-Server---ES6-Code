import request from 'supertest';
import app from '../app.js';

// eslint-disable-next-line no-undef
describe('Tests', () => {
	// eslint-disable-next-line no-undef
	it('test', async () => {
		const { body: data } = await request(app)
			.get('/health')
			.expect(200);

		// eslint-disable-next-line no-undef
		expect(data).toHaveProperty('message', 'OK');
	});
});
