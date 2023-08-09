const {
	cloudinary
} = require("../utils/cloudinary");
const BadRequestError = require("../errors/bad-request");
const fs = require("fs");

const uploadImage = async (req, res, next) => {
	try {
		if (req.files) {
			const file = req.files.myFile;
			const filePath = "./tmp/" + file.name;
			file.mv(filePath, function (err) {
				if (err) throw new BadRequestError("Failed to move the image");
			});
			const upload = await cloudinary.uploader.upload(filePath, {
				public_id: `${Date.now()}`,
				resource_type: "auto",
				folder: "images",
			});
			fs.unlinkSync(filePath);
			req.upload = {
				public_id: upload.public_id,
				url: upload.url,
			};
		} else {
			req.upload = {
				public_id: null,
				url: null,
			};
		}
		next();
	} catch (err) {
		throw new BadRequestError("Image upload failed");
	}
};

const deleteImage = async (req, res, next) => {
	try {
		const result = await cloudinary.uploader.destroy(req.body.public_id);
		req.delete = result;
		next();
	} catch (err) {
		throw new Error("Failed to delete the image");
	}
};
module.exports = {
	uploadImage,
	deleteImage
};