const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// Connect Database
connectDB();

// fixing CORS
app.use(express.json({ extended: false }));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

// ROUTES
// app.use('/api/superheroes', require('./routes/superheroes'));
// app.use('/api/sample', require('./routes/sampleData'));
// app.use('/api/solohero', require('./routes/soloHero'));
// app.use('/api/images', require('./routes/images'));
app.use('/api/cities', require('./routes/cities'));

app.use('/api/books', require('./routes/books'));
app.use('/api/sampleBooks', require('./routes/booksSampleData'));
app.use('/api/singlebook', require('./routes/singlebook'));
app.use('/api/bookimages', require('./routes/bookImages'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server started on ${PORT}`);
});
