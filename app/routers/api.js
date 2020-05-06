const
	{ Router, } = require('express'),
	multer = require('multer'),
	apiController = require('../controllers/apiController'),
	router = new Router(),
	formData = multer();

router.get('/result/:id', apiController.resultGet);

router.get('/result', apiController.allResults);

router.post('/result', formData.none(), apiController.resultPost);

router.post('/solve/one', formData.none(), apiController.solveOne);

router.post('/solve/two', formData.none(), apiController.solveTwo);

router.post('/solve/three', formData.none(), apiController.solveThree);

router.post('/solve/four', formData.none(), apiController.solveFour);

router.get('/generate', apiController.generate);

module.exports = router;