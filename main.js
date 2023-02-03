const express = require('express');
// const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()
const http = require('http');

const {handleError, APIError} = require('./error')

// setup global obj
global.APIError = APIError
global.err = require('./errors.json')

// connect db
require('./config/mongo')

const app = express();
app.use(logger('short'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", require("./route"))

app.use((err, req, res, next) => {
    handleError(err, res);
});

port = process.env.PORT || '3000'
app.set('port', port);
var server = http.createServer(app)

server.listen(port)
server.on('listening', ()=> {
    console.log('server is running on port 3000')
})