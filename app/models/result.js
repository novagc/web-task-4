const { Schema, model, } = require('mongoose');

const resultSchema = new Schema({
	task: {
		type   : Number,
		require: true,
	},
	text: {
		type   : String,
		require: true,
	},
});

module.exports = model('result', resultSchema);

