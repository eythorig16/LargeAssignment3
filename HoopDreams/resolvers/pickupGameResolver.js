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
            const { id, end } = args;
            const uPickupGame = PickupGame.findOne({ id: id });
            uPickupGame.end = end;
            return uPickupGame;
        },
        deletePickupGame: (parent, args) => {
            const { id } = args;
            const dPickupGame = PickupGame.findOne({ id: id });
            // check if pickup game exists
            if (dPickupGame == null) {
                // pickup game doesnt exist
                return false;
            }

            dPickupGame.remove();
            return true;
        }
    }
};