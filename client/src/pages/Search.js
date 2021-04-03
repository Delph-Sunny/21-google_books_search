import React, { useState, useEffect } from "react";
import MyJumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import { Container } from "../components/Grid";
import BookCard from "../components/BookCard";
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
        console.log(query); // FOR TESTING
        console.log(res.data.items[0].volumeInfo.averageRating); // FOR TESTING
      })
      .catch((err) => console.log(err));
  }

  function saveBook(id) {
    const book = books.find((book) => book.id === id);
    // Case handling when no authors listed
    let authors = "";
    if (book.volumeInfo.authors) {
      authors = book.volumeInfo.authors[0];
    } else {
      authors = "No authors listed";
    }
    

    API.saveBook({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      rating: book.volumeInfo.averageRating
    })
      .then((res) => {
        alert("Your book has been saved"); // TO DO: better render if time
        console.log(res); // FOR TESTING
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
      <Container>
        <ul>
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks ? (book.volumeInfo.imageLinks.thumbnail) : ("")}
              link={book.volumeInfo.infoLink}
              rating={book.volumeInfo.averageRating}
              onClick={() => saveBook(book.id)}
              label="Save"
              bgColor="#0EDB99"
            />
          ))}
        </ul>
      </Container>
    </Container>
  );
}

export default Search;
