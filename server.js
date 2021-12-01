const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const Exercise = require('./exerciseModel.js');
// example of model requirement
const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
);

// // submit route example
// app.post('/submit', ({ body }, res) => {
// 	User.create(body)
// 		.then((dbUser) => {
// 			res.json(dbUser);
// 		})
// 		.catch((err) => {
// 			res.json(err);
// 		});
// });

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
