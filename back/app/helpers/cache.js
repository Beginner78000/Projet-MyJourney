const debug = require('debug')('CacheModule');
const { createClient } = require('redis');

const db = createClient();

// We put a time by default
const TTL = 60 * 30;
const PREFIX = 'my-journey:';

// storage of the different keys inserted in redis
const keys = [];

const cacheModule = {
    async connect() {
        await db.connect();
    },

    async cache(request, response, next) {
        const key = `${PREFIX}${request.url}`;

        // If the data are in cache
        if (keys.includes(key)) {
            debug('Data via Redis');

            // We get the string
            const cachedString = await db.get(key);

            // We transform it in JSON
            const cachedValue = JSON.parse(cachedString);
            // we send data to the front
            return response.json(cachedValue);
        }

        // We have to get data via Postgres
        // We save the original code of response.json
        // We have to give a value to this in the function, with the bind method
        // Bind take a param => the object which will be equivalent to this
        const originalJson = response.json.bind(response);

        // We redefine response.json, we wrap the original method to
        // include caching infos in statement
        response.json = async (data) => {
            debug('Response json customized');
            const jsonData = JSON.stringify(data);
            await db.setEx(key, TTL, jsonData);
            keys.push(key);
            originalJson(data);
        };

        return next();
    },

    async flush(_, response, next) {
        debug('Delete all');
        const promises = [];
        keys.forEach((key) => promises.push(db.del(key)));
        await Promise.all(promises);

        // We empty the tables
        keys.length = 0;
        next();
    },
};

module.exports = cacheModule;
