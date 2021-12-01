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

	// add an exercise to a workout
	app.put('/api/workouts/:id', ({ body, params }, res) => {
		const workoutId = params.id;
		let savedExercises = [];

		// grab all exercises in current workout
		db.Workout.find({ _id: workoutId })
			.then((dbWorkout) => {
				// console.log(dbWorkout)
				savedExercises = dbWorkout[0].exercises;
				res.json(dbWorkout[0].exercises);
				let allExercises = [...savedExercises, body];
				console.log(allExercises);
				updateWorkout(allExercises);
			})
			.catch((err) => {
				res.json(err);
			});

		// update current workout
		function updateWorkout(exercises) {
			db.Workout.findByIdAndUpdate(
				workoutId,
				{ exercises: exercises },
				function (err, doc) {
					if (err) {
						console.log(err);
					}
				},
			);
		}
	});
};
