const { PickupGame, Player, BasketballField } = require('../data/db');
const service = require('../services/basketballFieldService');

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
                    if (game == null || err) {
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
            var field = service.getBasketBallFieldById(basketballFieldId);
            var host = context.db.Player.findById(hostId);

            if (field == null || host == null) {
                return new context.error.NotFoundError();
            }

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
                        reject(new context.error.NotFoundError());
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
                    else {
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

        },
        removePlayerFromPickupGame: (parent, args) => {
            const { playerId, pickupGameId } = args.input;

            return new Promise((resolve, reject) => {
                context.db.PickupGame.findById(args.input.pickupGameId, (err, pickupGame) => {
                    if (err) {
                        reject(new context.error.NotFoundError());
                    } else if (game == null) {
                        reject(new context.error.NotFoundError());
                    } else if (new Date() > pickupGame.end) {
                        reject(new context.error.PickupGameAlreadyPassedError());
                    }

                    var index = pickupGame.registeredPlayers.indexOf(playerId);

                    if (index > -1) {
                        pickupGame.registeredPlayers.splice(index, 1);
                    }

                    context.db.PickupGame.findByIdAndUpdate(pickupGameId,
                        { registeredPlayers: pickupGame.registeredPlayers }, (err, pickupGame_) => {
                            if (err) {
                                reject(new context.error.BadRequest());
                            }
                            resolve(pickupGame_);
                        });
                });
            });
        }
    }
};