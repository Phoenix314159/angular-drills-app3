const data = require('./data');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/getdata', data.getData);

app.listen(3033, function () {
    console.log('listening on port 3033');
})
