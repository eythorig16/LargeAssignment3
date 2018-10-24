const Schema = require('mongoose').Schema;

module.exports = new Schema({
    id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true  },
    playedGames: [{ type: Schema.Types.ObjectId, required: true, ref: "pickupGame"}]
});