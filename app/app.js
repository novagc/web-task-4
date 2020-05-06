const
	express = require('express'),
	mongodb = require('mongoose'),
	app = new express();

module.exports.configure = () => {
	app.use(express.static(__dirname + '/public'));
	app.use(express.urlencoded({ extended: true, }));
	app.use(express.json());

	app.use('/api', require('./routers/api'));
	app.use('/', require('./routers/home'));
	app.use('/task', require('./routers/task'));
};

module.exports.initBD = (config) => {
	mongodb.connect(config.connectionString, {
		useNewUrlParser: true,
	});
};

module.exports.init = (config) => {
	module.exports.configure();
	module.exports.initBD(config);
};

module.exports.start = (config) => {
	app.listen(config.port, () => {
		console.log(`Server started on ${config.port}`);
	});
};

module.exports.app = app;