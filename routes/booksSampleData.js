const express = require('express');
const router = express.Router();
const config = require('config');
const sample = config.get('booksSample');
const Books = require('../schema/Books');

const cloudinary = require('cloudinary');
cloudinary.config({
	cloud_name: 'dkstecshe',
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET
});

// router.post('/', async (req, res) => {
// try {
// 	await Books.collection.drop();
// 	await Books.insertMany(sample, function(err, mongooseDocuments) {
// 		res.send('posted samples');
// 	});
// } catch (error) {
// 	res.status(500).json('Server error - cannot post sample');
// }
// });

router.post('/', async (req, res) => {
	try {
		await Books.collection.drop();
		// loop over sample
		for (let s of sample) {
			// create newImg array
			let newImgArray = [];
			// loop over images -> add them into cloud
			for (let image of s.images) {
				await cloudinary.v2.uploader.upload(image.url, (err, result) => {
					if (err) {
						return res.status(501).send('Cloudinary Server Error');
					}
					// add them into newImg array
					// console.log(result, 'result');
					newImgArray = [
						...newImgArray,
						{
							id: result.public_id,
							url: result.secure_url
						}
					];
				});
			}
			s.images = newImgArray;
		}

		// insert updated array
		await Books.insertMany(sample, function(err, mongooseDocuments) {
			res.json(sample);
		});
	} catch (error) {
		res.status(500).json('Server error - cannot post sample');
	}
});

module.exports = router;
