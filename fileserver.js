var express = require('express');
var config = require('./config-mvc');
var app = express();
var system = {};
system.app = app;
system.config = config;

app.configure(function() {
	app.use(express.compress());
	app.use(config.staticDirectory, express.static(config.staticPath));
	app.use('/BuildJS', express.static(__dirname + '/../BuildJS'));
	app.use('/BuildJS-Front', express.static(__dirname + '/../BuildJS-Front'));
	app.use(express.methodOverride());
	app.use(app.router);
});
app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});
app.configure('production', function() {
	app.use(express.errorHandler());
});
app.listen(config.port, function() {
	console.log('Listening on port ' + config.port);
});
