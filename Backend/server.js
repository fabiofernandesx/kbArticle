var express       = require('express');
var bodyParser    = require('body-parser');
var compression   = require('compression');
var morgan        = require('morgan');
var mongoose      = require('mongoose');
var config		  = require('./api/shared/config');
var cors 		  = require('cors');

var app = express();
var server = require('http').createServer(app);

mongoose.Promise = global.Promise;
mongoose.connect(config.db.devDb);	

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

app.use(morgan('dev'));  

require('./routes')(app);

var port = 8000;
var server = app.listen(port);
console.log("API up and running at port: " +  port);

exports = module.exports = app;