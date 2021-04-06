import React, { useState } from "react";
import API from "../utils/API";
import MyJumbotron from "../components/MyJumbotron";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "../components/BookCard";
import "./style.css";



function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessages] = useState("");

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
        console.log(res.data.items)
      })
      .catch((err) => console.log(err));
  }

  function saveBook(id) {
    const book = books.find((book) => book.id === id);
    
    
    
    API.saveBook({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    })
      .then((res) => {
        API.subscribeToUpdates(book, (response) => console.log('received saved update: ',response))
        //alert("Your book has been saved"); // TO DO: better render if time
        console.log("book saved")
      })
      .catch((err) => console.log(err.response));
  }


  return (
    <Container fluid >
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
                  : "https://via.placeholder.com/150"
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
