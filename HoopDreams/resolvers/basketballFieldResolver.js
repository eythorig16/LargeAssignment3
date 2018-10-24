module.exports = {
    queries: {
        allBasketballFields: () => {
            return db.basketballFields;
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
            db.basketballFields.push(newBasketballField);
            return newBasketballField;
        },
        updateBasketballField: (parent, args) => {
            const uBasketballField = db.basketballFields.find(p => p.id === args.id);
            uBasketballField.name = args.name;
            return uBasketballField;
        },
        deleteBasketballField: (parent, args) => {
            const dBasketballField = db.basketballFields.find(p => p.id === args.id);
            const index = db.basketballFields.indexOf(dBasketballField);

            db.basketballFields.splice(index, 1);

            return true;
        }
    }
};