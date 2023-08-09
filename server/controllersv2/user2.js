const error = require('../errors/error-response');
const User = require("../models/User");
const {
    cloudinary
} = require("../utils/cloudinary");

const updateUser = async (req, res) => {
    try {
        const {
            name,
            jobRole
        } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.userId, {
                name,
                jobRole
            }, {
                new: true
            }
        );
        if (!user) return error(res, 400, 'An error occured')

        res.status(200).send({
            success: true,
            message: 'update successful',
            data: {
                name: user.name,
                jobRole: user.jobRole,
            }
        });
    } catch (error) {
        err(res, 500, 'Something went wrong')
    }
};

const updateProfileIcon = async (req, res) => {
    try {
        const id = req.user.userId;
        const {
            public_id,
            url
        } = req.upload;
        const user = await User.findById(id);
        if (!user) return error(res, 400, 'something went wrong')
        let oldImageId = user.profileIconCloudinaryId
        user.profileIconCloudinaryId = public_id
        user.profileIconUrl = url
        await user.save()
        res.status(200).json({
            status: "success",
            data: {
                profileIconUrl: public_id,
                profileIconCloudinaryId: url
            },
        });
        const result = await cloudinary.uploader.destroy(oldImageId)
    } catch (error) {
        err(res, 500, 'Something went wrong')
    }
};


module.exports = {
    updateUser,
    updateProfileIcon
}