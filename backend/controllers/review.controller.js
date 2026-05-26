import { Review } from "../models/review.model.js";

export const addReview = async (req, res) => {
  try {
    const { name, role, content, rating } = req.body;
    if (!name || !role || !content || !rating) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const review = new Review({
      name,
      role,
      content,
      rating,
    });

    await review.save();
    res.status(201).json({ success: true, message: "Review added successfully", data: review });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
