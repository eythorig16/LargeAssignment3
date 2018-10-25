const { PickupGame } = require('../data/db');

module.exports = {
    queries: {
        allPickupGames: () => {
            return PickupGame.find({});
        },
        pickupGame: (parent, args) => {
            const { id } = args;
            return PickupGame.findOne({ id: id });
        }
    },
    mutations: {
        createPickupGame: (parent, args) => {
            const newPickupGame = {
                id: args.input.id,
                start: args.input.start,
                end: args.input.end,
                location: args.input.location,
                host: args.input.host
            };
            PickupGame.create(newPickupGame);
            return newPickupGame;
        },
        updatePickupGame: (parent, args) => {
            const uPickupGame = PickupGame.find(p => p.id === args.id);
            uPickupGame.end = args.end;
            return uPickupGame;
        },
        deletePickupGame: (parent, args) => {
            const dPickupGame = PickupGame.find(p => p.id === args.id);
            const index = PickupGame.indexOf(dPickupGame);

            pickupGames.splice(index, 1);

            return true;
        }
    }
};