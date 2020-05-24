const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		// client ip address _ console.log(req.ip);
		return res.send({ msg: 'hello world'});
	});
	next();
};


// 429 http rate-limited