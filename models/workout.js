const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    type: {
        type: String,
        trim: true,
    },

	name: {
		type: String,
		trim: true,
	},

    distance: {
        type: Number,
        trim: true,
    },

    duration: {
        type: Number,
        trim: true,
    },



	password: {
		type: String,
		trim: true,
		required: 'Password is required',
		validate: [
			({ length }) => length >= 6,
			'Password must be at least 6 characters.',
		],
	},

	email: {
		type: String,
		match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
		unique: true,
	},

	userCreated: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
