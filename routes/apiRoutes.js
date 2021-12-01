// place database calls here

// models
var db = require('../models');

module.exports = function (app) {
	// new workout
	app.post('/api/workouts', async (req, res) => {
		try {
			const response = await db.Workout.create({ type: 'workout' });
			res.json(response);
		} catch (err) {
			console.log(
				'error has occured attempting to create a new workout: ',
				err,
			);
		}
	});

	// grab last workout to display it for user after creation
	app.get('/api/workouts', (req, res) => {
		db.Workout.find({})
			.then((workout) => {
				res.json(workout);
			})
			.catch((err) => {
				res.json(err);
			});
	});
};
