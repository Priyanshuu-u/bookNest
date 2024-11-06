// routes/ratings.js
import express from "express";
import { addRating, getRatingsByBook } from "../controller/ratings.contoller.js"; // Ensure the path is correct

const router = express.Router();

// Route to add a rating/comment
router.post("/ratings", addRating);

// Route to get all ratings/comments for a specific book
router.get("/ratings/:bookId", getRatingsByBook);

export default router;
