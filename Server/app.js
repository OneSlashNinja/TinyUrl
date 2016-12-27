"use strict";

var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

var mysqlUtil = require('./mysqlUtil');
mysqlUtil.dbConnect();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var baseRouter = express.Router();

baseRouter.route('/')
	.get(function(req, res){
		var responseJson = {longUrl: "www.google.com"};

		res.json(responseJson);
	})
	.post(function(req, res){
		console.log(req.body);

		res.send(req.body);
	});

baseRouter.route('/:urlId')
	.get(function(req, res){
		mysqlUtil.getUrlById(req.params.urlId, function(urlStr){
			res.json(urlStr);
		});
	});

app.use('/api', baseRouter);

// please use the above way to route
// app.get('/', function(req, res){
// 	res.send('welcome to the virgin land TinyUrl!!!');
// });

app.listen(port, function(){
	console.log('Runing on PORT: ' + port);
});