const sample = require('../apis/sample.js');

/**
 * Routes are defined here.
 *
 * @type {{api: module.exports.api}}
 */
module.exports = {api: function (app) {
    /* a basic get api to get the app name */
    app.get('/', (request, response) => sample.index(request, response));

    /* a sample post request */
    app.post('/', (request, response) => sample.create(request, response));
}};
