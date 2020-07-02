const express = require('express');
const router = express.Router();

const { nicknameCheck, idCheck } = require('../config/validations');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Books = require('../schema/Books');

// get all book's details
// fetching the entire data
router.get('/:id', idCheck, async (req, res) => {
	try {
		let book = await Books.findOne({ _id: req.params.id });
		return res.json(book);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Internal Server Error');
	}
});

// update books's text
router.put('/:id', async (req, res) => {
	const book = {};
	Object.keys(req.body).forEach((key) => {
		book[key] = req.body[key];
	});
	try {
		const updatedBook = await Books.findOneAndUpdate({ _id: req.params.id }, { $set: book }, { new: true });
		return res.json(updatedBook);
	} catch (err) {
		return res.status(500).send('Internal Server Error');
	}
});

// delete the entire books
router.delete('/:id', idCheck, async (req, res) => {
	try {
		await Books.findByIdAndRemove(req.params.id);
		return res.json(req.params.id);
	} catch (err) {
		return res.status(500).send('Internal Server Error');
	}
});

module.exports = router;
