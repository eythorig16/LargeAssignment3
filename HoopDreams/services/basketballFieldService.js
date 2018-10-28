var request = require('request');
const errorr = require('../errors');

module.exports = {

    getBasketballFields: () => {
        return new Promise((resolve, reject) => {
            request('https://basketball-fields.herokuapp.com/api/basketball-fields', function (error, response, body) {
                if (error != null) {
                    return reject(error);
                }
                try {
                    resolve(JSON.parse(body));
                } catch (err) {
                    reject(new errorr.NotFoundError);
                }
            })
        })
    }
}