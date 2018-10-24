const { PickupGame } = require('../data/db');

module.exports = {
    queries: {
        allPickupGames: () => {
            return PickupGame.find({});
        },
        pickupGame: (parent, args) => {
            return allPickupGames.find(p => p.id === args.id);
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
            db.pickupGames.push(newPickupGame);
            return newPickupGame;
        },
        updatePickupGame: (parent, args) => {
            const uPickupGame = db.pickupGames.find(p => p.id === args.id);
            uPickupGame.end = args.end;
            return uPickupGame;
        },
        deletePickupGame: (parent, args) => {
            const dPickupGame = db.pickupGames.find(p => p.id === args.id);
            const index = db.pickupGames.indexOf(dPickupGame);

            db.pickupGames.splice(index, 1);

            return true;
        }
    }
};