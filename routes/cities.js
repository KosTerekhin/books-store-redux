const express = require('express');
const router = express.Router();
const cities = require('cities.json');

router.get('/', async (req, res) => {
	// const res = cities.filter((city) => )

	const regex = new RegExp('pari', 'gi');

	const data = cities.filter(({ name }) => name.match(regex));

	return res.json(data);

	// try {
	// 	let data = await Books.find({});
	// 	let partialData = data.map((item) => {
	// 		return {
	// 			_id: item._id,
	// 			title: item.title,
	// 			images: [ item.images[0] ]
	// 		};
	// 	});

	// 	return res.json(partialData);
	// } catch (error) {
	// 	return res.status(500).send('Internal Server Error');
	// }
});

module.exports = router;
