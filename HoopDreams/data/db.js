const mongoose = require('mongoose');
const pickupGameSchema = require('../mongooseSchema/pickupGameSchema');
const playerSchema = require('../mongooseSchema/playerSchema');

const connection = mongoose.createConnection('mongodb://ofiprump:prump1@ds042677.mlab.com:42677/veftbaseballhoops', { 
    useNewUrlParser: true 
});

module.exports = {
    PickupGame: connection.model('PickupGame', pickupGameSchema),
    Player: connection.model('Player', playerSchema),
    connection
};