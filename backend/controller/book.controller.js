import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("error:" + error);
    res.status(500).json(error);
  }
};
export const sellBook = async (req, res) => {
  try {
    const { name, title, price, category, available, image, author, comments, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Create a new book document with the user's ID
    const newBook = new Book({
      name,
      title,
      price,
      category,
      available,
      image,
      author,
      comments,
      userId, // Link the book to the logged-in user
    });

    // Save the book to the database
    await newBook.save();

    res.status(201).json(newBook); // Return the newly added book
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error selling book' });
  }
};
export const getBooksByUser = async (req, res) => {
  try {
    const userId = req.headers['authorization']?.split(' ')[1]; // Extract userId from Authorization header
    if (!userId) {
      return res.status(401).json({ error: 'User not logged in' });
    }

    // Find all books associated with this userId
    const books = await Book.find({ userId });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching user books' });
  }
};
