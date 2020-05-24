const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');
const {signBearerToken, verifyBearerToken} = require('../../lib/utils/jwt');
const {obsfcPswd, chkObsfc} = require('../../lib/utils/obfs');

module.exports = function (route, opts, next) {
	route.get('/', async (req, res) => {

		// parse request headers
		var accessToken = req.headers['x-access-token'];
		if (!accessToken) {
			return res.code(401)
			.send({status: 401, msg: 'No token provided. You are not authorized to view this resource.'})
		};

		// verify token against client secret
		var result = await verifyBearerToken(accessToken);
		if (!result) {return res.code(500).send({status: 500, msg: 'failed to authenticate token'})}
		// set request middleware here
		console.log(result.id);

		// ... perform rest of controller
		const usrs = await route.knex.select().from('users');
		return res.send({ users: usrs });
	});

	route.post('/login', async (req, res) => {
		if (!req.body) return res.code(400).send({ message: "Empty body fields."});
		if (!req.body.email && !req.body.password) {return res.code(400).send({status: 400, message: "Missing required fields for login." })};

		const user = {
			emailAddress: req.body.email,
			password: req.body.password
		};

		var current_credentials = await route.knex.select('pswdHash')
		.from('users').where('email', user.emailAddress); // get old password by emailAddress row and check if exists via email address
		current_credentials = current_credentials[0]['pswdHash'];
		var verified = await chkObsfc(user.password, current_credentials);

		if (verified === true) {
			var getUser = await route.knex.select('*').from('users').where('email', user.emailAddress);
			getUser = getUser[0];
			// generate accessToken upon successful credential verification to login
			var atok = await signBearerToken(getUser.email);

			return res.code(200).send({ 
				user: {
					email: getUser.email
				}, 
				exists: verified,
				accessToken: atok
			});
		} else return res.code(401).send({ status: 400, msg: 'Incorrect password provided. Try again.'});
		

	});

	route.post('/register', async (req, res) => {
		
		if (!req.body) return res.code(400).send({ message: "Empty body fields."})
		if (!req.body.email && !req.body.password && !req.body.username && !req.body.nickname) {
			return res.code(400).send({status: 400, message: "Missing required fields for user registration" });
		};

		const user = {
			emailAddress: req.body.email,
			password: req.body.password,
			username: req.body.username,
			nickname: req.body.nickname
		};

		// check if account exists with credentials, if so, return error response, else continue on..

		user.password = await obsfcPswd(user.password);
		const inserted = await route.knex('users')
		.insert({ email: user.emailAddress, pswdHash: user.password, username: user.username, nickname: user.nickname });
		
		/**
		 * MARK: we need error handling for invalid fields. 
		 * gotta research how to do that.
		 * TODO: send response, reponse code for conflicting or invalid input 
		 */

		var newlyCreated = await route.knex.select('*').from('users').where('email', user.emailAddress);
		var atok = await signBearerToken(newlyCreated.email); // or use uuid as `id` field

		return res.code(201).send({
			status: 201, 
			user: {
				id: newlyCreated.id,
				username: newlyCreated.username,
				email: newlyCreated.email
			}, 
			accessToken: atok 
		});
	});

	route.post('/update/username', async (req, res) => {
		
			var accessToken = req.headers['x-access-token'];
			if (!accessToken) {
				return res.code(401)
				.send({status: 401, msg: 'No token provided. You are not authorized to view this resource.'})
			};

			var result = await verifyBearerToken(accessToken);
			if (!result) {return res.code(500).send({status: 500, msg: 'Failed to authenticate token'})};
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
				res.code(500).send({ msg: 'There was an error with your request.', error: err })
			};
	});

	next();
};