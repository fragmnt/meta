const ffy = require('fastify')({
	bodyLimit: 1048576 * 2,
	logger: true
});

/**
 * PLUGINS
 */

const cors = require('fastify-cors');
const knex = require('./src/config/db.config');
const helmet = require('fastify-helmet');
const formBody = require('fastify-formbody');

/**
 * CONTROLLERS
 */

const indexRouter = require('./src/routes/index');
const router = require('./src/routes/v1/index');
const userRouter = require('./src/routes/v1/users');
const marqRouter = require('./src/routes/v1/marqeta');

const PORT = 9080;

// Register plugins, database instance

ffy.register(knex, err => console.error(err));
ffy.register(cors, { origin: '*', preflight: true });
ffy.register(helmet);
ffy.register(formBody, { bodyLimit: 1048576 });

// Assign routes

ffy.register(indexRouter);
ffy.register(router, { prefix: '/v1'});
ffy.register(userRouter, { prefix: '/v1/users'});
ffy.register(marqRouter, { prefix: '/v1/mrq'})

// Run the server :.

ffy.listen(PORT, (err, ADDRESS) => {
	if (err) throw err;
	// ffy.log.info(`.: Server listening on ${ADDRESS}`);
});
