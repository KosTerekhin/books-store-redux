const express = require('express');
const router = express.Router();
const cities = require('cities.json');

router.get('/', async (req, res) => {
	const filterList = [ 'UA' ];
	const regex = new RegExp(`^${req.query.character}`, 'gi');

	const data = cities.filter(({ country }) => filterList.includes(country)).filter(({ name }) => name.match(regex));

	setTimeout(() => {
		return res.json(data);
	}, Math.floor(Math.random() * 4000 + 100));
});

module.exports = router;
