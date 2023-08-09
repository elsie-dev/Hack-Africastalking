const User = require("../models/User");
const hashPassword = require("../utils/hashPassword");
const {
    sendEmail,
    mailStyle
} = require("../utils/sendEmail");
const error = require('../errors/error-response');
const crypto = require('node:crypto')

//Signup Response 
const signupResponse = async (req, res, user, password) => {
    user.password = await hashPassword(password);
    const activationToken = user.activateToken()
    const activationURL = `${req.protocol}://${req.get('host')}/api/v2/auth/verify/${activationToken}`
    const message = mailStyle('Click the link below to verify your account', activationURL);
    await sendEmail(req.body.email, "Verify email", message);
    await user.save();
    //Saving the user after sending the email incase there was an error in sending the email
    //should look into scheduling the email so a retry can be made in case of a failure - scheduled job
    return res.status(201).send({
        status: true,
        message: 'signup successful',
    });
}

const signup = async (req, res, next) => {
    try {
        let {
            email,
            name,
            password
        } = req.body;

        if (!email || !password || !name) return error(res, 400, 'Provide all necessary details')

        email = email.toLowerCase();

        const userExists = await User.findOne({
            email,
        });

        if (userExists && userExists.status === 'Active') return error(res, 400, 'email already in use, please signin')
        if (userExists && userExists.status === 'Pending') return await signupResponse(req, res, userExists, password)

        const user = new User({
            name,
            email,
            password,
        });
        if (user) return await signupResponse(req, res, user, password)
    } catch (err) {
        error(res, 500, 'Something went wrong')
    }
};

const verify = async (req, res) => {
    try {
        const activationToken = req.params.token
        const user = await User.findOneAndUpdate({
            activationToken,
            activationTokenExpires: {
                $gt: Date.now()
            }
        }, {
            status: 'Active',
            activationToken: '',
            activationTokenExpires: undefined
        }, {
            new: true
        })

        if (!user) return error(res, 400, 'Invalid or expired link')
        res.status(200).send({
            status: true,
            message: 'User successfully verified'
        })
    } catch (err) {
        error(res, 500, 'Something went wrong')
    }
};

const login = async (req, res, next) => {
    try {
        let {
            email,
            password
        } = req.body;
        email = email.toLowerCase();

        if (!email || !password) return error(res, 400, 'Provide an email and password')

        const user = await User.findOne({
            email,
        });

        if (!user || !(await user.comparePassword(password))) return error(res, 400, 'email or password is incorrect')
        if (user.status !== 'Active') return error(res, 400, 'Kindly verify your account')

        const token = user.createJWT();
        user.password = undefined
        user.resetToken = undefined
        user.resetTokenExpires = undefined
        //Remember to make the fields above unreturned in a query
        return res.status(200).send({
            status: true,
            message: 'Login successful',
            data: user,
            token,
        });
    } catch (error) {
        err(res, 500, 'Something went wrong')
    }
};

const forgotPassword = async (req, res, next) => {
    try {
        var user = await User.findOne({
            email: req.body.email.toLowerCase(),
        });
        if (!user) return error(res, 400, 'No user with this email address')
        const resetToken = user.createResetToken()
        const resetURL = `${req.protocol}://${req.get('host')}/api/v2/auth/resetPassword/${resetToken}`
        const message = mailStyle('Click the link below to reset your password', resetURL);
        await sendEmail(req.body.email, "Reset Password", message);
        await user.save()

        res.status(200).send({
            status: true,
            message: "Email Sent Successfully",
        })

    } catch (error) {
        err(res, 500, 'Something went wrong')
    }
};

const resetPassword = async (req, res) => {
    try {
        let {
            password,
            confirmPassword
        } = req.body;
        const resetToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
        const user = await User.findOne({
            resetToken,
            resetTokenExpires: {
                $gt: Date.now()
            }
        });
        if (!user) return error(res, 400, 'Invalid or expired linkssss')
        if (password !== confirmPassword) return error(res, 400, 'Password and confirm password must be the same')

        //There is an incorrectly propagated error when a typeof === number is passed as password
        user.password = await hashPassword(password);
        user.resetToken = '';
        user.resetTokenExpires = undefined
        await user.save();

        res.status(200).send({
            status: true,
            message: 'password change was successful',
        });
    } catch (err) {
        err(res, 500, 'Something went wrong')
    }
};

// const googleSuccess = (req, res) => {
// 	const user = req.user;
// 	const token = jwt.sign({ user }, process.env.JWT_SECRET, {
// 		expiresIn: "2h",
// 	});
// 	if (req.user) {
// 		res.status(200).json({
// 			success: true,
// 			message: "successfull",
// 			user: req.user,
// 			token: token,
// 		});
// 	}
// };

// const googleLogout = (req, res) => {
// 	req.session.destroy();
// 	res.redirect(process.env.CLIENT_URL);
// };


module.exports = {
    signup,
    login,
    forgotPassword,
    verify,
    resetPassword,
    // 	googleSuccess,
    // 	googleLogout,
};