const Review = require("../models/Review");

// Create Review
exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Review by ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ error: "Review not found" });
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Review
exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedReview) return res.status(404).json({ error: "Review not found" });
        res.json(updatedReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Review
exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ error: "Review not found" });
        res.json({ message: "Review deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
