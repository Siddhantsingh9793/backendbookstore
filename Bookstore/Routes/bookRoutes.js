// booksRoute.js
import express from 'express';
import Book from './bookModel.js';

const router = express.Router();

// POST route to add a new book
router.post('/add', async (req, res) => {
  const { title, author, genre, publishedDate } = req.body;

  const newBook = new Book({
    title,
    author,
    genre,
    publishedDate,
  });

  try {
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Error adding book', error: error.message });
  }
});

export default router;
