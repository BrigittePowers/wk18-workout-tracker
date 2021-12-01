const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// reminder:
//CARDIO needs distance;
//RESISTANCE needs weights/reps/sets.
//Do not set them to required.

// schema will record the date of a workout
//and the exercises performed (as an array of objects)

// model was matched to existing seed.js file

const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: 'Please specify cardio or resistance training.',
				},
				name: {
					type: String,
					trim: true,
					required: 'Exercise name is required.',
				},
				duration: {
					type: Number,
					required: 'Duration (minutes) is required.',
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{
		toJSON: {
			// include virtual properties
			virtuals: true,
		},
	},
);

// dynamic schema property
workoutSchema.virtual('totalDuration').get(function () {
	// find the sum of exercise durations and return it as the total duration
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
