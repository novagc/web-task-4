const
	result = require('../models/result'),
	getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min,
	getArray = (n, min, max) => Array(n)
		.fill()
		.map(() => getRandomInt(min || 1, max || 100)),
	getResultArray = a => Array.from(a)
		.sort((a, b) => a - b);

module.exports.allResults = async (req, res) => {
	const array = await result.find({});
	res.status(200).send(JSON.stringify({ array: array, }));
};

module.exports.resultGet = async (req, res) => {
	try {
		const rs = await result.findById(req.params.id);
		if (rs) {
			res.status(200).send(`{"task":${rs.task},"text":"${rs.text}"}`);
		} else {
			res.status(404).send('{"err":"Такого результата не существует"}');
		}
	} catch {
		res.status(404).send('{"err":"Некорректный id"}');
	}
};

module.exports.resultPost = async (req, res) => {
	try {
		const id = (await result.create({ 'task': Number(req.body.number), 'text': req.body.text, }))._id;
		res.status(200).send(`{"id":"${id}"}`);
	} catch {
		res.status(200).send('{"err":"Invalid"}');
	}
};

module.exports.solveOne = (req, res) => {
	const radius = Number(req.body.r);

	req.body.number = 1;
	req.body.text = String(Math.PI * radius * radius);

	module.exports.resultPost(req, res);
};

module.exports.solveTwo = (req, res) => {
	const x = req.body.x;

	req.body.number = 2;
	req.body.text = String(Array(101)
		.fill()
		.map((elem, index) => (x ** index) / [ 1, ].concat(Array(index)
			.fill()
			.map((elem, index) => index + 1))
			.reduce((a, b) => a * b))
		.reduce((a, b) => a + b));

	module.exports.resultPost(req, res);
};

module.exports.solveThree = (req, res) => {
	const arr = req.body.arr;

	req.body.number = 3;
	req.body.text = [ arr[0].join(' '), ].concat(arr.slice(1).map(elem => elem.map((elem, index) => elem - arr[0][index]).join(' '))).join('|');

	module.exports.resultPost(req, res);
};

module.exports.solveFour = (req, res) => {
	let
		i = 0,
		j = 0,
		sum = 0,
		offset = -1;

	const
		n = Number(req.body.n),
		arr = getResultArray(getArray(n * n, Number(req.body.min), Number(req.body.max))),
		resArr = Array(n)
			.fill()
			.map(() => Array(n).fill(0));

	for (i = n - 1; sum !== arr.length; sum++) {
		resArr[i][j] = arr[sum];
		i += offset;

		if (i === n || i < 0) {
			offset *= -1;
			j++;
			i += offset;
		}
	}

	req.body.number = 4;
	req.body.text = resArr.map(elem => elem.join(' ')).join('|');

	module.exports.resultPost(req, res);
};

module.exports.generate = (req, res) => {
	res.status(200).send(JSON.stringify({ array: getArray(12, -100, 101), }));
};