const Schema = require('mongoose').Schema;

module.exports = new Schema({
    start: { type: Schema.Types.Date, required: true },
    end: { type: Schema.Types.Date, required: true },
    location: { type: String, required: true },
    registeredPlayers: [{ type: Schema.Types.ObjectId, required: true, ref: "Player" }],
    host: { type: Schema.Types.ObjectId, required: true, ref: "Player" }
});