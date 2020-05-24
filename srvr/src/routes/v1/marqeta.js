// marqeta api routes

const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');

const marqeta = require('../../services/marqeta.api');

module.exports = function (route, opts, next) {

    route.get('/users', async (req, res) => {
		var mrq = await marqeta.getUsers();
		console.log(mrq.data)
		try {
			res.code(200).send({ status: 200, data: mrq.data.data });
		} catch (err) {
			res.code(500).send({ status: 500, msg: 'There was an error', error: err });
		}
    });
    
    next();
};