const { PickupGame, Player, BasketballField } = require('../data/db');

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
            console.log("HERE");
            const { start, end, basketballFieldId, hostId } = args.input;
            const host = Player.findOne({ id: hostId });
            const basketballField = BasketballField.findOne({ id: basketballFieldId });

            var pickupGame = new PickupGame();
            pickupGame.id = 1;
            pickupGame.start = start;
            pickupGame.end = end;
            pickupGame.location = basketballFieldId;
            pickupGame.host = host;

            console.log(pickupGame);

            PickupGame.create(pickupGame, (err, pickupGame) => {
                if (err) {
                    throw new Error(err);
                }
                return pickupGame;
            });

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