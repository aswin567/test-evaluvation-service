const express = require('express');
const log = require('morgan')('dev');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const db = require('./config/database');

//hero routes
const userRoutes = require('./features/users/users.route');
const bugReportRoutes = require('./features/bugs-report/bugs-report.route');
var app = express();
//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});


//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    
    console.log("A request for things received at " + Date.now());
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

 // use express router
app.use('/api',router);

//call heros routing
bugReportRoutes(router);
userRoutes(router);

// intialise server
app.listen(properties.PORT, (req, res) => {
    console.log(req)
    console.log(`Server is running on ${properties.PORT} port.`);
})