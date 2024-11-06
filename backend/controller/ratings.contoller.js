// controllers/ratingsController.js
import Rating from "../model/rating.model.js"; // Correct path to the model

// Add rating
export const addRating = async (req, res) => {
  try {
    const { bookId, userId, rating, comment } = req.body;
    const newRating = new Rating({ bookId, userId, rating, comment });
    await newRating.save();
    res.status(201).json(newRating); // Send the saved rating back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding rating" });
  }
};

// Controller to get all ratings/comments for a specific book
export const getRatingsByBook = async (req, res) => {
  try {
    // Fetch ratings based on the bookId param
    const ratings = await Rating.find({ bookId: req.params.bookId }).populate(
      "userId", // Populating the userId field
      "fullname" // Fetching the username from the user document
    );
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ error: "Error fetching ratings" });
  }
};
