const { BasketballField } = require('../data/db');

module.exports = {
    queries: {
        allBasketballFields: () => {
            return BasketballField.find({});
        },
        basketballField: (parent, args) => {
            return allBasketballFields.find(p => p.id === args.id);
        }
    }
};