const Schema = require('mongoose').Schema;

module.exports = new Schema({
    start: { type: String, required: true  },
    end: { type: String, required: true  },
    location: { type: Schema.Types.ObjectId, required: true, ref: "basketballField"},
    playedGames: [{ type: Schema.Types.ObjectId, required: true, ref: "pickupGame"}],
    host: { type: Schema.Types.ObjectId, required: true, ref: "player" }
});