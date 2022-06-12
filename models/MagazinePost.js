import mongoose from "mongoose";

const MagazinePostSchema = new mongoose.Schema({
	title: String,
	dateCreated: {
		type: Date,
		default: Date.now,
	},
	dateUpdated: {
		type: Date,
		default: Date.now,
	},
	imageUrl: String, // Absolute
	summary: String,
	body: String,
	postUrl: String, // Relative
});

module.exports = mongoose.models.MagazinePost || mongoose.model("MagazinePost", MagazinePostSchema);
