const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('./config/db.config');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		return res.send({ msg: 'hello world'});
	});
	route.get('/users', async (req, res) => {
		const users = await route.knex.select().from('users');
		return res.send({ usrs: users });
	});
	next();
};

