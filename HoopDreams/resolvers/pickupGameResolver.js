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
            const { id } = args;

            return new Promise((resolve, reject) => {
                context.db.PickupGame.findByIdAndDelete(id, (err, rem) => {
                    if (err) {
                        resolve(false);
                    }

                    resolve(true);
                });
            })
        },
        addPlayerToPickupGame: (parent, args, context) => {
            const { playerId, pickupGameId } = args.input;

            return new Promise((resolve, reject) => {
                context.db.PickupGame.findById(pickupGameId, (err, pickupGame) => {
                    if (err) {
                        reject(err);
                    }
                    if (new Date() > pickupGame.end) {
                        reject(new context.error.PickupGameAlreadyPassedError());
                    }
                    else{      
                        pickupGame.registeredPlayers.push(playerId);
                        context.db.PickupGame.findByIdAndUpdate(pickupGameId,
                            { registeredPlayers: pickupGame.registeredPlayers }, (err, pickupGame) => {
                                if (err) {
                                    reject(err);
                                }

                                resolve(pickupGame);
                            });
                    }
                })
            })

        }
    }
};