const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		// client ip address _ console.log(req.ip);
		return res.code(200).send({ status: 200, msg: 'API Versioning: v0.0.1'});
	});
	next();
};


// 429 http rate-limited