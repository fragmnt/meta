const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		// client ip address _ 
		return res.code(200).send({ 
			status: 200, 
			msg: 'API Version: v0.0.1',
			client_ip_address: req.ip
		});
	});
	next();
};


// 429 http rate-limited
// error, redirects