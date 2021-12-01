// place front-end calls here

module.exports = function (app) {
	// nav to new or continued workout
	app.get('/exercise', function (req, res) {
		res.sendFile(path.join(__dirname, '../public/exercise.html'));
	});
};
