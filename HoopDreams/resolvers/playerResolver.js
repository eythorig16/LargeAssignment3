module.exports = {
    queries: {
        allPlayers: (root, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.Player.find({}, (err, data) => {
                    resolve(data);
                });
            });
        },
        player: (parent, args, context) => {
            return context.db.Player.findById(args.id);
        }
    },
    mutations: {
        createPlayer: (parent, args, context) => {
            const { name } = args.input;

            var player = new context.db.Player();
            player.name = name;

            context.db.Player.create(player);
            return player;
        },


        updatePlayer: (parent, args, context) => {
            
            return new Promise((resolve, reject) => {
                const uPlayer = context.db.Player.findOneAndUpdate(
                    {_id:args.id},
                    {
                        $set: {
                            name: args.name
                        }
                    },
                    {new: true}
                    );
                    resolve(uPlayer);
            })
        },
        removePlayer: (parent, args, context) => {
            return new Promise((resolve, reject) => {
                context.db.Player.findByIdAndDelete(args.id, (err, rem) => {
                    if(err) {
                        reject(err);
                    } 
                    resolve(true);
                });
            })
        }
    }
};
