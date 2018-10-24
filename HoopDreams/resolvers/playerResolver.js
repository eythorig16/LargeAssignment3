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
                id: 2,
                name: args.input.name,
                description: args.input.description
            };
            db.players.push(newPlayer);
            return newPlayer;
        },
        updatePlayer: (parent, args) => {
            const update
        }
        
    }
};