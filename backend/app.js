const express = require("express");
const favicon = require('express-favicon');
const path = require('path');
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");

const cors = require( 'cors' );
const router = require("./routes/routes");
const { MulterError } = require("multer");
function multerErrors(err, req, res, next) {
    if (res.headersSent || !(err instanceof MulterError)) {
        return next(err);
    }
    res.statusMessage = err.name;
    return res.status(400).json(err);
}
app.use(cors());
app.use(bodyParser.json());
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(router);
app.use(multerErrors);
module.exports = app; 
/*
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

 const cors = require("./middleware/cors");
 const router = require("./routes/routes");
const { MulterError } = require("multer");
require("./db/mongoose");

const app = express();

function multerErrors(err, req, res, next) {
    if (res.headersSent || !(err instanceof MulterError)) {
        return next(err);
    }
    res.statusMessage = err.name;
    return res.status(400).json(err);
}

// app.use(cors)
app.use(cors);
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(router);
app.use(multerErrors);

module.exports = app;*/