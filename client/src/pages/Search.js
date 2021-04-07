import React, { useState } from "react";
import API from "../utils/API";
import MyJumbotron from "../components/MyJumbotron";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "../components/BookCard";
import {toast} from "react-toastify";
import "./style.css";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBooks(query)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  }

  function saveBook(id) {
    const book = books.find((book) => book.id === id);
    // if no author
    if (book.volumeInfo.authors === undefined) {
      book.volumeInfo.authors = ["Unknown author"];
    }
    //if no image assigned
    if (typeof(book.volumeInfo.imageLinks) === "undefined") {
      let val = `${process.env.PUBLIC_URL + "/icons/image-not-found.png"}`;
      book.volumeInfo.imageLinks = { thumbnail: val };
      }

      API.saveBook({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    })
      .then((res) => {
       toast.info(`"${book.volumeInfo.title}" has been saved!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); // TO DO: To connect with socket
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <Container fluid>
      <MyJumbotron />
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
      />
      <Container fluid id="book-box">
        <Row>
          <h6>Results</h6>
        </Row>
        <Row>
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : `${process.env.PUBLIC_URL + "/icons/image-not-found.png"}`
              }
              link={book.volumeInfo.infoLink}
              rating={book.volumeInfo.averageRating}
              onClick={() => saveBook(book.id)}
              label="Save"
              bgColor="#f4a451"
            />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Search;
