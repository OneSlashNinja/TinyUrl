"use strict";

var mysql = require('mysql');

var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'',
	database: 'tiny_url'
});

var dbConnect = function(){
	dbConn.connect();
};

var dbEndConnection = function(){
	dbConn.end();
};

var insertUrl = function(urlStr, callback){
	var newUrl = {
		url: urlStr
	};

	var query = dbConn.query('insert into tinyurl set ?', newUrl, function(err, result){
		console.log(query.sql);

		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('connected as id ' + dbConn.threadId);

		if(result){
			console.log(result);

			callback(result.insertId);
		}
	});
};

var getUrlById = function(id, callback){
	var query = dbConn.query('select url from tinyurl where id = ?', id, function(err, rows, fields){
		console.log(query.sql);

		if (err) {
			console.error('error connecting: ' + err.stack);
			return;
		}

		console.log('connected as id ' + dbConn.threadId);

		callback(rows[0]);
	});
};

module.exports = {
	dbConnect: dbConnect,
	dbEndConnection: dbEndConnection,
	insertUrl: insertUrl,
	getUrlById: getUrlById
};
