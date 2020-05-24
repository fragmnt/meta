require('dotenv').config();

const fp = require('fastify-plugin');
const knex = require('knex');

const dbConfig = {
    client: process.env.MYSQL_DB_CLIENT,
    debug: true,
    connection: {
        host: process.env.MYSQL_DB_URL,
        user: process.env.MYSQL_DB_USERNAME, 
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
        port: process.env.MYSQL_DB_PORT
    },
    pool: { min: 0, max: 7 }
    // ...options
};

const knxConn = async (server, opts, next) => {
    const db = knex(dbConfig);
    server.decorate('knex', db);
    next();
};

module.exports = fp(knxConn);