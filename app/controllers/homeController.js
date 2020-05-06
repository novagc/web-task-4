module.exports.home = (req, res) => {
	res.status(200).sendFile('views/index.html', { root: './app', });
};