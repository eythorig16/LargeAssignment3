const db = require('../data/db');

module.exports = {
    queries: {
        allPlayers: () => {
            return db.players;
        },
        player: (parent, args) => {
            return allPlayers.find(p => p.id === args.id);
        }
    },
    mutations: {
        createPlayer: (parent, args) => {
            const newPlayer = {
                id: args.input.id,
                name: args.input.name
            };
            db.players.push(newPlayer);
            return newPlayer;
        },
        updatePlayer: (parent, args) => {
            const uPlayer = db.players.find(p => p.id === args.id);
            uPlayer.name = args.name;
            return uPlayer;
        },
        deletePlayer: (parent, args) => {
            const dPlayer = db.players.find(p => p.id === args.id);
            const index = db.players.indexOf(dPlayer);

            db.players.splice(index, 1);

            return true;
        }
    }
};