var express = require('express');

// Create app
var app = express();

// tell the server what directory to use
app.use(express.static('public'));

// start server listening on port 3000
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});