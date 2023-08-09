require("dotenv").config();
const nodemailer = require('nodemailer')

const sendMessage = async (from, subject, url) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "Gmail",
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
            tls: {
                rejectUnauthorized: false
            },
        });

        const result = await transporter.sendMail({
            from,
            to: 'aplicarorg@gmail.com',
            subject: subject,
            html: url,
        });
    } catch (error) {
        throw error
    }
};

module.exports = {
    sendMessage
}