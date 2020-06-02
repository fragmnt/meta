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
		return res.send({ 
			meta_identity_api: {
				users: usrs
			} 
		});
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
				status: 200,
				user: {
					email: getUser.email
				}, 
				exists: verified,
				accessToken: atok
			});
		} else return res.code(401).send({ 
			status: 400, 
			msg: 'Incorrect password provided. Try again.'
		});
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
		const exists = await route.knex.select('*').from('users').where('email', user.emailAddress);
		if (exists === undefined || exists.length == 0) {
			await route.knex('users')
			.insert({ email: user.emailAddress, pswdHash: user.password, username: user.username, nickname: user.nickname });
			
			/**
			 * MARK: we need error handling for invalid fields. 
			 * gotta research how to do that.
			 * TODO: send response, reponse code for conflicting or invalid input 
			 * ALSO: prevent duplicate signups
			 */

			var newlyCreated = await route.knex.select('*').from('users').where('email', user.emailAddress);
			var atok = await signBearerToken(newlyCreated[0]['email']); // or use uuid as `id` field

			return res.code(201).send({
				status: 201, 
				user: {
					id: newlyCreated[0]['id'],
					username: newlyCreated[0]['username'],
					email: newlyCreated[0]['email']
				}, 
				accessToken: atok 
			});
		} else {
			return res.code(409).send({
				status: 409,
				msg: "User already exists! Try signing up with a different email or logging in!"
			});
		}
	});

	next();
};