const { Player } = require('../data/db');


module.exports = {
    queries: {
        allPlayers: (root, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.Player.find({}, (err, data) => {
                    resolve(data);
                });
            });
                // Player.find({});
        },
        player: (parent, args) => {
            return Player.findOne({id : args.id});
        }
    },
    mutations: {

        createPlayer: (root, args, context) => {
            return new Promise((resolve, rejext) => {
                context.db.Player.create({
                    name: args.input.name },
                    (err, newPlayer) => {
                        console.log(args.input.name);
                        resolve(newPlayer)
                    }
                )
            });
        },


        updatePlayer: (parent, args) => {
            const uPlayer = Player.find(p => p.id === args.id);
            uPlayer.name = args.name;
            return uPlayer;
        },
        removePlayer: (parent, args) => {
            const dPlayer = Player.find(p => p.id === args.id);
            const index = Player.indexOf(dPlayer);

            Player.splice(index, 1);

            return true;
        }
    }
};