require("dotenv").config();
const Admin = require("../models/Admin");
const Blog = require("../models/Blog");
const error = require('../errors/error-response');
const {
    cloudinary
} = require("../utils/cloudinary");


const createPost = async (req, res) => {
    try {
        const {
            title,
            content,
        } = req.body;
        const {
            public_id,
            url
        } = req.upload;
        if (!title || !content || !public_id || !url) {
            return error(res, 400, 'A title, content and image is needed to create a blog post')
        }
        const admin = await Admin.findById(req.user.userId);
        if (!admin) return error(res, 401, 'This user cannot make a post')
        const post = new Blog({
            title,
            content,
            adminId: req.user.userId,
            imageUrl: url,
            imageCloudinaryId: public_id
        });
        await post.save();

        return res.status(201).json({
            status: true,
            message: "Post created successfully",
            data: post,
        });
    } catch (err) {
        error(res, 500, 'Something went wrong')
        await cloudinary.uploader.destroy(public_id)
    }
};


const deletePost = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: true,
            message: 'Post deleted successfully'
        });
        await cloudinary.uploader.destroy(blog.imageCloudinaryId)
    } catch (err) {
        error(res, 500, 'Something went wrong')
    }
};

const getPosts = async (req, res) => {
    try {
        const page = ((+req.query.page - 1) * 10) || 0
        const result = await Blog.find().limit(10).skip(page).sort({
            createdAt: -1
        }).exec();
        const total = await Blog.countDocuments()

        if (result && total) {
            return res.status(200).send({
                status: true,
                currentPage: req.query.page || 1,
                totalPages: Math.ceil(total / 10),
                message: "Successfully retrieved",
                data: result
            });
        } else {
            error(res, 404, 'Posts not found')
        }
    } catch (err) {
        error(res, 500, 'Something went wrong')
    }
};


const getApost = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return error(res, 404, 'Post not found')
        return res.status(200).json({
            status: true,
            message: "Blog request was successfully.",
            data: blog,
        });
    } catch (err) {
        error(res, 500, 'Something went wrong')
    }
};


const searchPosts = async (req, res) => {
    try {
        const query = req.query.q
        if (!query) return error(res, 400, 'Enter a search parameter')
        const data = await Blog.aggregate([{
            "$search": {
                "text": {
                    "query": query,
                    "path": ["title", "content"]
                }
            },

        }])

        if (data.length === 0) return error(res, 404, 'Search did not come up with any results')
        res.status(200).send({
            status: true,
            message: 'Results found',
            searchResults: data.length,
            data
        })
    } catch (err) {
        error(res, 500, 'Something went wrong')
    };
}


const editPost = async (req, res, next) => {
    try {
        const {
            title,
            content
        } = req.body
        const {
            public_id,
            url
        } = req.upload;
        let oldPublicId, oldUrl
        const blog = await Blog.findById(req.params.id)
        if (!blog) return error(res, 400, 'Blog not found')

        if (public_id && url) {
            oldPublicId = blog.imageCloudinaryId
            blog.imageUrl = url
            blog.imageCloudinaryId = public_id
        }
        blog.title = title
        blog.content = content
        await blog.save()
        res.status(200).send({
            status: true,
            message: 'Update successful',
            data: blog
        })
        await cloudinary.uploader.destroy(oldPublicId)
    } catch (err) {
        error(res, 500, 'Something went wrong')
    };
}
module.exports = {
    createPost,
    getPosts,
    deletePost,
    searchPosts,
    getApost,
    editPost,
};