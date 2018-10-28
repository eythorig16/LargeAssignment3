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
            const { start, end, basketballFieldId, hostId } = args.input;

            var pickupGame = new context.db.PickupGame();
            pickupGame.start = start;
            pickupGame.end = end;
            pickupGame.location = basketballFieldId;
            pickupGame.host = hostId;

            context.db.PickupGame.create(pickupGame);
            return pickupGame;
        },
        removePickupGame: (parent, args, context) => {
            console.log("here");
            const { id } = args;
            console.log(id);

            return new Promise((resolve, reject) => {
                context.db.PickupGame.findByIdAndDelete(id, (err, rem) => {
                    if (err) {
                        reject(err);
                    }

                    resolve(true);
                });
            })

        }
    }
};