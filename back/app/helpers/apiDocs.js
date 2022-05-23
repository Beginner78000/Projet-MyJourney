const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: "My Journey",
        description: "API pour aider les voyageurs",
    },
    security: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
    },
    baseDir: __dirname,
    // We analyze all the files of the project
    filesPattern: ['../routers/**/*.js', '../errors/*.js', '../models/*.js'],
    // URL where the documentation page will be available
    swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
    // Enable documentation through an API route
    exposeApiDocs: true,
    apiDocsPath: '/api/docs',
};

/**
 * Swagger middleware factory
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that create web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
