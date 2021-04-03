import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import API from "../utils/API";
import Card from '../components/Card';
import "./style.css";

function Saved() {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadSavedBooks();
  }, []);

  // Loads all books and sets them to books
  function loadSavedBooks() {
    API.getSavedBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadSavedBooks())
      .catch((err) => console.error(err));
  }
  console.log(books); // FOR TESTING

  return (
    <Container fluid>
      <Jumbotron />
      <Container>
        <ul>
          {books.map((book) => (
            <Card
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}              
              onClick={() => deleteBook(book._id)}
              label="Delete"
              bgColor="#AC3117"

            ></Card>
          ))}
        </ul>
      </Container>
    </Container>
  );
}

export default Saved;
