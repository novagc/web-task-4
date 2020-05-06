module.exports.home = (req, res) => {
	res.redirect('../');
};

module.exports.all = (req, res) => {
	res.status(200).sendFile('views/task/all.html', { root: './app', });
};

module.exports.one = (req, res) => {
	res.status(200).sendFile('views/task/one.html', { root: './app', });
};

module.exports.two = (req, res) => {
	res.status(200).sendFile('views/task/two.html', { root: './app', });
};

module.exports.three = (req, res) => {
	res.status(200).sendFile('views/task/three.html', { root: './app', });
};

module.exports.four = (req, res) => {
	res.status(200).sendFile('views/task/four.html', { root: './app', });
};

module.exports.oneWithId = (req, res) => {
	res.status(200).sendFile('views/task/one.html', { root: './app', });
};

module.exports.twoWithId = (req, res) => {
	res.status(200).sendFile('views/task/two.html', { root: './app', });
};

module.exports.threeWithId = (req, res) => {
	res.status(200).sendFile('views/task/three.html', { root: './app', });
};

module.exports.fourWithId = (req, res) => {
	res.status(200).sendFile('views/task/four.html', { root: './app', });
};
