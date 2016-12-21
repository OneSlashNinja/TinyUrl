var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var baseRouter = express.Router();

baseRouter.route('/').get(function(req, res){
	var responseJson = {longUrl: "www.google.com"};

	res.json(responseJson);
});

app.use('/api', baseRouter);

// please use the above way to route
// app.get('/', function(req, res){
// 	res.send('welcome to the virgin land TinyUrl!!!');
// });

app.listen(port, function(){
	console.log('Runing on PORT: ' + port);
});