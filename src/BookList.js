import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue, push } from "firebase/database";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const booksRef = ref(database, "books");
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      const booksArray = data ? Object.values(data) : [];
      setBooks(booksArray);
    });
  }, []);

  const addBook = () => {
    const booksRef = ref(database, "books");
    push(booksRef, { title, author, price });
    setTitle("");
    setAuthor("");
    setPrice("");
  };

  return (
    <div>
      <h1>Books for Sale</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
