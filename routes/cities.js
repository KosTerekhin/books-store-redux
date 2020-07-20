const express = require('express');
const router = express.Router();
const cities = require('cities.json');

router.get('/', async (req, res) => {
	const filterList = [ 'UA' ];

	const regex = new RegExp(`^${req.body}`, 'gi');

	const data = cities.filter(({ country }) => filterList.includes(country)).filter(({ name }) => name.match(regex));

	return res.json(data);
});

module.exports = router;
