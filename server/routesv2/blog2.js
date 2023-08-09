const express = require("express");
const router = express.Router();
const {
    admin
} = require("../middleware/admin");
const {
    uploadImage
} = require("../middleware/image");
const {
    createPost,
    editPost,
    deletePost,
    getPosts,
    getApost,
    searchPosts
} = require("../controllersv2/blog2")


router.get('/', getPosts)
router.get('/search', searchPosts) //This route has to come before the id route below because if it comes after, the /search wll be treated as an ID and a cast id error thorwn wwhich given the current state of error handling will be very difficlut to spot in the absence of this comment.
router.get('/:id', getApost)

//PROTECTED ROUTES
router.use(admin)
router.route('/').post(uploadImage, createPost)
router.route('/:id').delete(deletePost).put(uploadImage, editPost)

module.exports = router;