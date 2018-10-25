const { Player } = require('../data/db');


module.exports = {
    queries: {
        allPlayers: () => {
            return Player.find({});
        },
        player: (parent, args) => {
            return Player.findOne({id : args.id});
        }
    },
    mutations: {
        createPlayer: (parent, args) => {
            const newPlayer = {
                id: args.input.id,
                name: args.input.name
            };
            Player.create(newPlayer);
            return newPlayer;
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