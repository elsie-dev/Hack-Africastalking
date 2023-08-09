//Authentication routes for version 2
const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
    signup,
    forgotPassword,
    verify,
    login,
    resetPassword,
    // googleSuccess,
    // googleLogout,
} = require("../controllersv2/auth2");

router.post("/signup", signup);
router.put("/verify/:token", verify);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.put('/resetPassword/:token', resetPassword)

// GOOGLE auth routes
// router.get(
//     "/google",
//     passport.authenticate("google", {
//         scope: ["profile", "email"],
//     })
// );

// router.get(
// 	"/google/callback",
// 	passport.authenticate("google", {
// 		failureRedirect: "https://coverly.hng.tech/signup",
// 		successRedirect: process.env.CLIENT_URL,
// 	})
// );
// router.get("/googlelogout", googleLogout);

// router.get("/success", googleSuccess);

module.exports = router;