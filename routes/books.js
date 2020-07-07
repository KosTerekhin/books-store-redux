const express = require('express');
const router = express.Router();

const { storage, fileFilter } = require('../config/multer');
const { textFieldCheck, nicknameCheck } = require('../config/validations');

const multer = require('multer');
const upload = multer({ storage });

const cloudinary = require('cloudinary');
cloudinary.config({
	cloud_name: 'dkstecshe',
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

const Books = require('../schema/Books');

// get all super Books
// fetching data that will displayed on main page
router.get('/', async (req, res) => {
	try {
		let data = await Books.find({});
		let partialData = data.map((item) => {
			return {
				_id: item._id,
				title: item.title,
				images: [ item.images[0] ]
			};
		});

		return res.json(partialData);
	} catch (error) {
		return res.status(500).send('Internal Server Error');
	}
});

router.post('/', upload.single('images'), [ fileFilter, textFieldCheck, nicknameCheck ], async (req, res) => {
	console.log(req.body);
	const newBook = {};
	// uploading image to the cloudinary
	await cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
		if (err) {
			return res.status(501).send('Cloudinary Server Error');
		}
		// add cloudinary url for the images array
		newBook.images = [
			{
				id: result.public_id,
				url: result.secure_url
			}
		];
	});

	// adding remaining properties
	Object.keys(req.body).forEach((key) => {
		newBook[key] = req.body[key];
	});

	book = new Books(newBook);

	try {
		await book.save();
		return res.json(book);
	} catch (error) {
		return res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
