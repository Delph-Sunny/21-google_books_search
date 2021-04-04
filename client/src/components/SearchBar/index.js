import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./style.css";

function SearchBar(props) {
  return (
    <section className="border p-4 mb-4 d-flex justify-content-center align-items-center flex-column">
      <div>
        <div className="input-group">
          <div className="form-outline">
            <input
              className="form-control mr-sm-2"
              onChange={props.handleInputChange}
              value={props.value}
              type="search"
              placeholder="Search for a book title"
              aria-label="Search"
            />
          </div>
          <Button
            onClick={props.handleFormSubmit}
            className="btn-lg submit-btn"
            type="submit"
          >
            <FaSearch className="search-icon" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
