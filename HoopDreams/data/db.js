const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://ofiprump:prump1@ds042677.mlab.com:42677/veftbaseballhoops', { 
    useNewUrlParser: true 
});

module.exports