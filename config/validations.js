const Books = require('../schema/Books');

const nicknameCheck = async (req, res, next) => {
	try {
		let book = await Books.findOne({ title: req.body.title });
		if (book && book._id != req.params.id) {
			return res.status(401).send('Another book already has this title, try a different one');
		}
		next();
	} catch (error) {
		console.log(error);
		next();
	}
};

const idCheck = async (req, res, next) => {
	try {
		await Books.findOne({ _id: req.params.id });
	} catch (error) {
		console.log(error);
		return res.status(401).send('book not found - wrong ID');
	}
	next();
};

const textFieldCheck = (req, res, next) => {
	const validator = [];
	Object.keys(req.body).forEach((key) => {
		if (req.body[key].trim().length < 1) {
			validator.push(key);
		}
	});

	if (!req.file) {
		validator.push('Image');
	}

	if (validator.length) {
		return res.status(401).send(`Please add: ${[ ...validator ]} and try again`);
	}

	next();
};

module.exports = { nicknameCheck, idCheck, textFieldCheck };
