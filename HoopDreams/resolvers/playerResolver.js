const { Player } = require('../data/db');


module.exports = {
    queries: {
        allPlayers: () => {
            Player.find({}, (err, players) => {
                if (err) {
                    throw new Error(err);
                }
                return players;
            })

        },
        player: (parent, args) => {
            return allPlayers.find(p => p.id === args.id);
        }
    },
    mutations: {
        createPlayer: (parent, args) => {
            console.log("HERE");
            const { name } = args.input;

            var player = new Player();
            player.name = name;

            Player.create(player);
            return player;
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