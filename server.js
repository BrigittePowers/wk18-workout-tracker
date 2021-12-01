// dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

// connect to port
const PORT = process.env.PORT || 3000;

// models
const workout = require('./models/workout.js');

// express connection
const app = express();

// middleware
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// mongoose connects first to ATLAS then attempts local connection
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
);

// routes
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
