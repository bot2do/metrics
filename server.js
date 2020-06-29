var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');


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
app.use(cors());
app.options('*', cors());

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Expose-Headers", "X-My-Custom-Header, X-Another-Custom-Header");
  next(); // make sure we go to the next routes and don't stop here
});

app.use('/api',router);

routes.time_range(router,Metric);
routes.client(router,Metric);
routes.mtype(router,Metric);
routes.mid(router,Metric);


app.listen(port, function(request, response){
    console.log("Server is running on "+ port + " port");
});
