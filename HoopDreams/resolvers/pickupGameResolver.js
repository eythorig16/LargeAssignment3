const { PickupGame, Player, BasketballField } = require('../data/db');
const service = require("../services/basketballFieldService");

module.exports = {
    queries: {
        allPickupGames: (root, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.PickupGame.find({}, (err, data) => {
                    resolve(data);
                });
            });
        },
        pickupGame: (parent, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.PickupGame.findById(args.id, (err, game) => {
                    if(game == null || err) {
                        reject(new context.error.NotFoundError());
                    }
                    else {
                        resolve(game);
                    }
                });        
            })
        }
    },
    mutations: {
        createPickupGame: (parent, args, context) => {
            const { start, end, basketballFieldId, hostId } = args.input;

            const game = service.getBasketBallFieldById(basketballFieldId);
            if (game.status == "OPEN") {

                var pickupGame = new context.db.PickupGame();
                pickupGame.start = start;
                pickupGame.end = end;
                pickupGame.location = basketballFieldId;
                pickupGame.host = hostId;

                context.db.PickupGame.create(pickupGame);
                return pickupGame;
            }
            else {
                throw new context.error.BasketballFieldClosedError();
            }
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

                    pickupGame.registeredPlayers.push(playerId);

                    context.db.PickupGame.findByIdAndUpdate(pickupGameId,
                        { registeredPlayers: pickupGame.registeredPlayers }, (err, pickupGame) => {
                            if (err) {
                                reject(err);
                            }

                            resolve(pickupGame);
                        });
                })
            })

        }
    }
};