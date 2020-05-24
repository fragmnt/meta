const fp = require('fastify-plugin');

module.exports = function (route, opts, next) {
	route.get('/', (req, res) => {
		return res.send({ message: 'Welcome to the Meta Identity API service.'});
	});
	next();
};