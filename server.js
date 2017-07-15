
var express = require('express');
//var mysql= require('mysql');
var app = express(); 						
var mongoose = require('mongoose'); 				
var port = process.env.PORT || 8080; 				
var database = require('./config/database'); 			
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static('./public')); 	
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 
var dbcon=require('./config/dbconnection')
//var con = mysql.createConnection({
//  host: database.host,
//  user: database.username,
//  password: database.password,
//   database: database.dbname
//});
//con.connect(function(err) {
//  if (err) throw err;
//  console.log("database Connected!");
//});
// routes ======================================================================
require('./app/routes.js')(app);
require('./app/routes/register.server.routes.js')(app);
// routes end
app.use('/bower_components',  express.static(__dirname + 'public/bower_components'));
app.listen(port);
console.log("App listening on port " + port);
