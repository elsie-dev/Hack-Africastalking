const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const {
    uploadImage
} = require("../middleware/image");
const {
    updateProfileIcon,
    updateUser
} = require("../controllersv2/user2.js");

router.use(auth)
router.patch('/profile', updateUser)
router.patch("/image", uploadImage, updateProfileIcon);

module.exports = router;