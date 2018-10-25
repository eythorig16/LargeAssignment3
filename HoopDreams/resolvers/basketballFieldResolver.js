const { BasketballField } = require('../data/db');

module.exports = {
    queries: {
        allBasketballFields: async () => {
            const fields = BasketballField.find({});
            return fields;
        },
        basketballField: (parent, args) => {
            const { id } = args;
            return BasketballField.findOne({ id: id });
        }
    }
};