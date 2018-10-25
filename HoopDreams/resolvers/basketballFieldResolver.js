const { BasketballField } = require('../data/db');

module.exports = {
    queries: {
        allBasketballFields: async () => {
            const fields = BasketballField.find({});
            console.log(fields);
            return fields;
        },
        basketballField: (parent, args) => {
            return allBasketballFields.find(p => p.id === args.id);
        }
    }
};