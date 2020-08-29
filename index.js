const express = require('express');
const app = express();

app.get('/apple', function(req, res){
    res.send('apple');
})

app.get('/banana', function(req, res){
    res.send('banana');
})