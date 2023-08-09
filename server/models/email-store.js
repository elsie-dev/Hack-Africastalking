const mongoose = require('mongoose')
const validator = require('validator')

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: validator.isEmail,
        unique: true
    }
})

const emailModel = mongoose.model('email', emailSchema)

module.exports = emailModel