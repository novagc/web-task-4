const
	server = require('./app/app'),
	config = require('./config.json');

if (config.port && config.connectionString) {
	server.init(config);
	server.start(config);
} else {
	console.log('Invalid config');
}
