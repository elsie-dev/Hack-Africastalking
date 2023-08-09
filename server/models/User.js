const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
	generateOTP
} = require("../utils/generateOTP");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide name"],
		maxlength: 50,
		minlength: 3,
	},
	email: {
		type: String,
		required: [true, "Please provide email"],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide a valid email",
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minlength: 6,
	},
	status: {
		type: String,
		enum: ["Pending", "Active"],
		default: "Pending",
	},
	jobRole: {
		type: String
	},
	confirmationCode: {
		type: String,
	},
	otp: {
		type: String,
		default: null
	},
	passwordResetExpires: {
		type: Date,
		default: null
	},
	profileIconUrl: {
		type: String,
		required: false,
		maxlength: 255,
		default: null,
	},
	profileIconCloudinaryId: {
		type: String,
		required: false,
		maxlength: 255,
		default: null,
	},
	activationToken: String,
	activationTokenExpires: Date,
	resetToken: String,
	resetTokenExpires: Date
});

UserSchema.methods.createJWT = function () {
	return jwt.sign({
			userId: this._id,
			name: this.name,
			email: this.email,
			status: this.status,
		},
		process.env.JWT_SECRET, {
			expiresIn: "30d",
		}
	);
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

UserSchema.methods.createPasswordResetToken = function () {
	const otp = generateOTP(4);
	this.otp = otp;
	return otp;
};

UserSchema.methods.activateToken = function () {
	const activationToken = crypto.randomBytes(32).toString('hex');
	this.activationToken = activationToken
	this.activationTokenExpires = Date.now() + 48 * 60 * 60 * 1000
	return activationToken;
};

UserSchema.methods.createResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString('hex');
	this.resetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
	this.resetTokenExpires = Date.now() + 48 * 60 * 60 * 1000
	return resetToken;
};

module.exports = mongoose.model("User", UserSchema);