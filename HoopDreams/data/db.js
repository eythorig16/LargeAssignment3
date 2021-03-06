const mongoose = require('mongoose');
const pickupGameSchema = require('../mongooseSchema/pickupGameSchema');
const playerSchema = require('../mongooseSchema/playerSchema');
const BasketballFieldSchema = require('../mongooseSchema/basketballFieldSchema');

const connection = mongoose.createConnection('mongodb://ofiprump:prump1@ds042677.mlab.com:42677/veftbaseballhoops', {
    useNewUrlParser: true
});

mongoose.set('useFindAndModify', false)

module.exports = {
    PickupGame: connection.model('PickupGame', pickupGameSchema),
    Player: connection.model('Player', playerSchema),
    BasketballField: connection.model('BasketballField', BasketballFieldSchema),
    connection
};