const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/", reviewController.createReview);       // Create a new review
router.get("/", reviewController.getReviews);          // Get all reviews
router.get("/:id", reviewController.getReviewById);    // Get review by ID
router.put("/:id", reviewController.updateReview);     // Update a review
router.delete("/:id", reviewController.deleteReview);  // Delete a review

module.exports = router;
