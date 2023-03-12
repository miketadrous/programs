var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

// listen to a particular port
app.listen(3000)