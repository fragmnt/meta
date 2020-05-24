const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../config/db.config');
const {signBearerToken, verifyBearerToken} = require('../lib/utils/jwt');

module.exports = function (route, opts, next) {
	route.get('/', async (req, res) => {

		// parse request headers
		var accessToken = req.headers['x-access-token'];
		if (!accessToken) {return res
			.code(401)
			.send({status: 401, msg: 'No token provided. You are not authorized to view this resource.'})};

		// verify token against client secret
		var result = await verifyBearerToken(accessToken);
		if (!result) {return res.code(500).send({status: 500, msg: 'failed to authenticate token'})}
		// set request middleware here
		console.log(result.id);

		// ... perform rest of controller
		const usrs = await route.knex.select().from('users');
		return res.send({ users: usrs });
	});
	route.post('/update/username', async (req, res) => {
			var accessToken = req.headers['x-access-token'];
			if (!accessToken) {return res
				.code(401)
				.send({status: 401, msg: 'No token provided. You are not authorized to view this resource.'})};

			var result = await verifyBearerToken(accessToken);
			if (!result) {return res.code(500).send({status: 500, msg: 'failed to authenticate token'})};
			// check permissions and role for access control
				
			try {
				const updateResult = await route.knex('users').where({ username: result.id }).update({ nickname: req.body.name });
				const updatedInfo = await route.knex.select('nickname').from('users').where({ username: result.id });
				
				if (updateResult === 1) {
					res.code(200).send({ status: 200, success: true, msg: "The user account was updated!", data: updatedInfo });
				} else {
					res.code(500).send({ status: 500, err: 'Failed to update username! Try again later.'});
				};
			} catch (err) {
				res.code(500).send({ msg: 'there was an error', error: err })
			}
	});


	next();
};