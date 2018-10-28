const Schema = require('mongoose').Schema;

module.exports = new Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
    location: { type: Schema.Types.ObjectId, required: true, ref: "basketballField" },
    registeredPlayers: [{ type: Schema.Types.ObjectId, required: true, ref: "Player" }],
    host: { type: Schema.Types.ObjectId, required: true, ref: "Player" }
});