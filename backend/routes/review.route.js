import express from "express";
import { addReview, getReviews } from "../controllers/review.controller.js";

const router = express.Router();

router.post("/addReview", addReview);
router.get("/getReviews", getReviews);

export default router;
