const { BasketballField } = require('../data/db');
const service = require('../services/basketballFieldService');

module.exports = {
    queries: {
        allBasketballFields: async () => {
            return service.getBasketballFields();
        },
        basketballField: (parent, args) => {
            const { id } = args;
            return service.getBasketBallFieldById(id);
        }
    }
};