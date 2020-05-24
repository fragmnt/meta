const ffy = require('fastify')({
	bodyLimit: 1048576 * 2,
	logger: true
});
const cors = require('fastify-cors');
const knex = require('./src/config/db.config');
const helmet = require('fastify-helmet');

const indexRouter = require('./src/routes/index');
const router = require('./src/routes/v1/index');
const userRouter = require('./src/routes/v1/users');

const PORT = 9080;

// Register plugins, database instance

ffy.register(knex, err => console.error(err));
ffy.register(cors, { origin: true, preflight: false })
ffy.register(helmet);

// Declare routes

ffy.register(indexRouter, {});
ffy.register(router, { prefix: '/v1'});
ffy.register(userRouter, { prefix: '/v1/users'});

// Run the server :.

ffy.listen(PORT, (err, ADDRESS) => {
	if (err) throw err;
	// ffy.log.info(`.: Server listening on ${ADDRESS}`);
});
