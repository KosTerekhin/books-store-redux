const express = require('express');
const router = express.Router();

const { storage, multipleFileFilter } = require('../config/multer');
const { idCheck } = require('../config/validations');

const multer = require('multer');
const upload = multer({ storage });

const cloudinary = require('cloudinary');
cloudinary.config({
	cloud_name: 'dkstecshe',
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

const Books = require('../schema/Books');

router.put('/:id', upload.array('images'), [ multipleFileFilter, idCheck ], async (req, res) => {
	try {
		var books = await Books.findOne({ _id: req.params.id });

		// add cloudinary url to the images array
		for (let i = 0; i < req.files.length; i++) {
			await cloudinary.v2.uploader.upload(req.files[i].path, (err, result) => {
				if (err) {
					return res.status(501).send('Cloudinary Server Error');
				}
				books.images = [
					...books.images,
					{
						id: result.public_id,
						url: result.secure_url
					}
				];
			});
		}

		// updating links in DB
		var books = await Books.findOneAndUpdate({ _id: req.params.id }, { $set: books }, { new: true });
		return res.json(books.images);
	} catch (error) {
		return res.status(500).send('Internal Server Error');
	}
});

// delete pictures
router.delete('/:id', idCheck, async (req, res) => {
	try {
		var books = await Books.findOne({ _id: req.params.id });
		// creating new books object by removing images by ID
		books.images = books.images.filter((item) => req.body.indexOf(item.id) == -1);
		// deleting images from cloud storage
		for (let i = 0; i < req.body.length; i++) {
			await cloudinary.v2.api.delete_resources(req.body[i], function(error, result) {
				console.log(result, error);
			});
		}
		// updating DB
		var books = await Books.findOneAndUpdate({ _id: req.params.id }, { $set: books }, { new: true });
		return res.json(books.images);
	} catch (error) {
		return res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
