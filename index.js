const express = require('express');
const app = express();

app.get('/apple', function(req, res){
    res.send('apple');
});

app.get('/banana', function(req, res){
    res.send('banana');
});

app.get('/mango', function(req, res){
    res.send('mango');
});

app.get('/grape', function(req, res){
    res.send('grape');
});

app.get('/plum', function(req, res){
    res.send('plum');
});