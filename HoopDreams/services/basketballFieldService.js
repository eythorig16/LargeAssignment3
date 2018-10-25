var request = require('request');

request('https://basketball-fields.herokuapp.com/api/basketball-fields', function (error, response, body) {
    if (error != null) {
        console.log('error:', error); // error
    }
    else {
        console.log('body:', body); // basketballfields
    }
});