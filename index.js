const express = require('express');
var server = express();
var router = express.Router();


server.use('/', router);

router.get('/', function (req, res, next) {
    console.log("New callback at "+(new Date()).toLocaleString())
    console.log(req.query)
    res.send("SUCCESS");
});

server.listen('6000');