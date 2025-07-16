const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    laptopName: {
        type: String,
        required: true,
    },
    reviewerName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    comment: {
        type: String,
        default: "",
    }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
