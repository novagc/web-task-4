const
	{ Router, } = require('express'),
	homeController = require('../controllers/homeController'),
	router = new Router();

router.get('/', homeController.home);

module.exports = router;