const express = require('express');
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('루트');
})

app.listen(3000, function(){
    console.log('서버 실행');
});