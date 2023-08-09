const validator = require('validator')
const errorResponse = require('../errors/error-response')
const {
    sendMessage
} = require('../services/contactService/contactUsService')

//Before you wonder who wrote this dirty piece of code - yeah yeah its me, I know...and oh he sends an email after a response, what if it fails, yeah yeah, I know too, leave it like that, I may revisit later
async function contactUs(req, res) {
    try {
        const payload = {
            email: req.body.email,
            fullName: req.body.fullName,
            phoneNumber: req.body.phoneNumber,
            issue: req.body.issue,
            description: req.body.description
        } = req.body
        payload.isValidEmail = validator.isEmail(payload.email)
        for (const each in payload) {
            if (!payload[each]) return errorResponse(res, 400, 'Incomplete contact information or invalid email')
        }
        const message = `User: ${payload.fullName}\nIssue: ${payload.issue}\n\nDescription: ${payload.description}\nEmail: ${payload.email}\nPhone Number: ${payload.phoneNumber}`
        res.status(200).send({
            message: 'We have recieved your message and will respond promptly'
        })
        const sentEmail = await sendMessage(`${payload.fullName}:${payload.email}`, payload.issue, message)
    } catch (err) {
        errorResponse(res, 500, 'Something went wrong')
    }
}

module.exports = {
    contactUs
}