const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://ofi:prump1@ds052978.mlab.com:52978/mansion-de-subastas', { 
    useNewUrlParser: true 
});