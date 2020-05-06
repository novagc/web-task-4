const
	{ Router, } = require('express'),
	taskController = require('../controllers/taskController'),
	router = new Router();

router.get('/', taskController.home);

router.get('/all', taskController.all);

router.get('/one', taskController.one);

router.get('/two', taskController.two);

router.get('/three', taskController.three);

router.get('/four', taskController.four);

router.get('/one/:id', taskController.oneWithId);

router.get('/two/:id', taskController.twoWithId);

router.get('/three/:id', taskController.threeWithId);

router.get('/four/:id', taskController.fourWithId);

module.exports = router;