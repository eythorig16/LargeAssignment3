const { BasketballField } = require('../data/db');

module.exports = {
    queries: {
        allBasketballFields: () => {
            return BasketballField.find({});
        },
        basketballField: (parent, args) => {
            return allBasketballFields.find(p => p.id === args.id);
        }
    },
    mutations: {
        createBasketballField: (parent, args) => {
            const newBasketballField = {
                id: args.input.id,
                name: args.input.name,
                capacity: args.input.capacity,
                yearOfCreation: args.input.yearOfCreation,
                status: args.input.status
            };
            BasketballField.create(newBasketballField);
            return newBasketballField;
        },
        updateBasketballField: (parent, args) => {
            const uBasketballField = BasketballField.find(p => p.id === args.id);
            uBasketballField.name = args.name;
            return uBasketballField;
        },
        deleteBasketballField: (parent, args) => {
            const dBasketballField = BasketballField.find(p => p.id === args.id);
            const index = BasketballField.indexOf(dBasketballField);

            BasketballField.splice(index, 1);

            return true;
        }
    }
};