const
	server = require('./app/app'),
	config = require('./config.json');

if (config.port && config.db && config.db.login && config.db.password) {
	server.init();
	server.start();
} else {
	console.log('Invalid config');
}