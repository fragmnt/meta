const ffy = require('fastify')({
	bodyLimit: 1048576 * 2,
	logger: true
});
const knex = require('./src/config/db.config');
const helmet = require('fastify-helmet');
const router = require('./src/routes/index');
const userRouter = require('./src/routes/users');

const PORT = 3008;

// Register plugins, database instance

ffy.register(knex, err => console.error(err));

ffy.register(helmet);

// Declare routes

ffy.register(router, { prefix: '/v1'});
ffy.register(userRouter, { prefix: '/v1/users'});

// Run the server :.

ffy.listen(PORT, (err, ADDRESS) => {
	if (err) throw err;
	// ffy.log.info(`.: Server listening on ${ADDRESS}`);
});
