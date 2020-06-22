var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var config = require('./config/properties');
var db = require('./config/database');
var routes = require('./server/routes/metric');
var Metric = require('./server/controllers/metric');



const port = process.env.PORT || 4000;

var log = morgan('dev');
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
var router = express.Router();
var app = express();
db();

app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cookieParser());

app.use('/api',router);

app.use('/', express.static('public'))


routes(router,Metric);

app.listen(port, function(request, response){
    console.log("Server is running on "+ port + " port");
});
