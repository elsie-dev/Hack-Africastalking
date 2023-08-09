const bcrypt = require("bcryptjs");

module.exports = async function (password) {
	const hashed = await bcrypt.hash(password, 10);
	return hashed;
};