const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../config/db.config');

module.exports = function (route, opts, next) {
	route.get('/', async (req, res) => {
		var accessToken = req.headers['X-Access-Token'];
		if (!accessToken) {return res
			.code(401)
			.send({status: 401, msg: 'No token provided. You are not authorized to view this resource.'})};

		// verify token against client secret

		const usrs = await route.knex.select().from('users');
		return res.send({ users: usrs });
	});
	route.post('/update/:username', async (req, res) => {
		await route.knex('users')
  		.where({ username: req.params.username })
		  .update({ nickname: req.body.name });
		
		const updatedInfo = await route.knex.select('nickname')
		.from('users')
		.where({ username: req.params.username });
		return res.send({ 
			msg: "The user account was updated!",
			data: updatedInfo 
		})
	});
	next();
};