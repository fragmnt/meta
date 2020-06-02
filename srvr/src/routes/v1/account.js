const fp = require('fastify-plugin');
const route = require('fastify');
const knex = require('../../config/db.config');
const {verifyBearerToken} = require('../../lib/utils/jwt');

module.exports = function (route, opts, next) {
	route.get('/info', async (req, res) => {
		// parse request headers
		var accessToken = req.headers['x-access-token'];
		if (!accessToken) {
			return res.code(401)
			.send({
                status: 401, 
                msg: 'No token provided. You are not authorized to view this resource.'
            });
		};

		// verify token against client secret and against database table 
		var result = await verifyBearerToken(accessToken);
		if (!result) {return res.code(500).send({status: 500, msg: 'Failed to authenticate token'})}
        
        // get account information from access_token
        var account = await route.knex.select('*').from('users').where('email', result.id);
        const accountInformation = {
            id: account[0].id,
            username: account[0].username,
            nickname: account[0].nickname,
            email: account[0].email,
            profile_photo_url: account[0].pfp_url
        }
        return res.code(200).send({
             user: accountInformation
        });
    });
    
    route.post('/update/username', async (req, res) => {
        var accessToken = req.headers['x-access-token'];
        if (!accessToken) {
            return res.code(401)
            .send({
                status: 401, 
                msg: 'No token provided. You are not authorized to view this resource.'
            });
        };

        var result = await verifyBearerToken(accessToken);
        if (!result) {return res.code(500).send({
            status: 500, 
            msg: 'Failed to authenticate token'
        })};

        // check permissions and role for access control
        try {
            const updateResult = await route.knex('users').where({ username: result.id }).update({ nickname: req.body.name });
            const updatedInfo = await route.knex.select('nickname').from('users').where({ username: result.id });
            
            if (updateResult == 1) {
                res.code(200).send({ 
                    status: 200, 
                    success: true, 
                    msg: "The user account was updated!", 
                    data: {
                        username: updatedInfo
                    } 
                });
            } else {
                res.code(500).send({ status: 500, err: 'Failed to update username! Try again later.'});
            };
        } catch (err) {
            res.code(500).send({ 
                msg: 'There was an error with your request.', 
                error: err 
            });
        };
    });

    next();
};