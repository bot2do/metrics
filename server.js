var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var config = require('./config/properties');
var db = require('./config/database');
var routes = require('./server/routes/metric');
var Metric = require('./server/controllers/metric');





var port = config.port;
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

routes.time_range(router,Metric);
routes.client(router,Metric);
routes.mtype(router,Metric);
routes.mid(router,Metric);


app.listen(port, function(request, response){
    console.log("Server is running on "+ port + " port");
});
