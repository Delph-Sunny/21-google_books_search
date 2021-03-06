import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MyJumbotron from "../components/MyJumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "../components/BookCard";
import {toast} from "react-toastify";
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
  function deleteBook(book) {
    API.deleteBook(book._id)
      .then((res) => {
        toast.info(`"${book.title}" has been removed!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }); // TO DO: To connect with socket
        loadSavedBooks();
      })
      .catch((err) => console.error(err));
  }

  return (
    <Container fluid>
      <MyJumbotron />
      <Container fluid id="book-box">
        <Row>
          <h6>Saved Books</h6>
        </Row>
        <Row>
          {books.map((book) => (
            <BookCard
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={() => deleteBook(book)}
              label="Delete"
              bgColor="#AC3117"
              display="none"
            ></BookCard>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Saved;
