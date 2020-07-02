const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	subtitle: {
		type: String,
		required: true
	},
	isbn13: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	images: [
		{
			_id: false,
			id: {
				type: String
			},
			url: {
				type: String,
				required: true
			}
		}
	]
});

module.exports = mongoose.model('books', BooksSchema);
