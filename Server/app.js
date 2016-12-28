"use strict";

var express = require('express'),
	bodyParser = require('body-parser');

var app = express();

var base62 = require('./base62.js');
var mysqlUtil = require('./mysqlUtil');
mysqlUtil.dbConnect();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use( express.static(__dirname + "/../client") );

var baseRouter = express.Router();


baseRouter.route('/')
	.get(function(req, res){
		var responseJson = {longUrl: "www.google.com"};

		res.json(responseJson);
	})
	.post(function(req, res){
		var requestJson = req.body;
		console.log(requestJson);

		mysqlUtil.getExistedUrl(requestJson.url, function(resultRows){
			if(resultRows.length == 0){
				mysqlUtil.insertUrl(requestJson.url, function(id){
					res.send({id: base62.encode(id)});
				});
				return;
			}


			res.send({id: base62.encode(resultRows[0].id)});
		});
	});

baseRouter.route('/:urlId')
	.get(function(req, res){
		mysqlUtil.getUrlById(base62.decode(req.params.urlId), function(urlStr){
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