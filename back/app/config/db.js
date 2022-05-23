/**
  * Rather than creating and connecting a Client
  * We will rather create a "pool" of customers and
  * let our module manage the connections
  * of several customers according to the needs.
  *
  * The pg package being well done, no need to change anything else.
  * the pool object also has a query method so the rest of our code
  * will continue to work
  *
  * As for Client login information
  * are either read directly from the .env or given as a parameter
 */
const debug = require('debug')('SQL:log');
const { Pool } = require('pg');

const config = {
    connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === 'production') {
    config.ssl = {
        rejectUnauthorized: false,
    };
}

const pool = new Pool(config);

module.exports = {
   
    originalClient: pool,

    async query(...params) {
        debug(...params);

        return this.originalClient.query(...params);
    },
};
