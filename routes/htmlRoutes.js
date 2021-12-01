// place front-end calls here

var path = require('path');

module.exports = function (app) {
	// nav to new or continued workout
	app.get('/exercise', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/exercise.html'));
	});
};
