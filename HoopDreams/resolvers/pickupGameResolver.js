const { PickupGame, Player, BasketballField } = require('../data/db');

module.exports = {
    queries: {
        allPickupGames: (root, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.PickupGame.find({}, (err, data) => {
                    resolve(data);
                });
            });
        },
        pickupGame: (parent, args) => {
            const { id } = args;
            return PickupGame.findById(id);
        }
    },
    mutations: {
        createPickupGame: (parent, args, context) => {
            console.log("HERE");
            const { start, end, basketballFieldId, hostId } = args.input;

            var pickupGame = new context.db.PickupGame();
            pickupGame.start = start;
            pickupGame.end = end;
            pickupGame.location = basketballFieldId;
            pickupGame.host = hostId;

            context.db.PickupGame.create(pickupGame);
            return pickupGame;
        },
        deletePickupGame: (parent, args) => {
            const { id } = args;
            const dPickupGame = PickupGame.findById(id);

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