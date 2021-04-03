import React from "react";
import { FaSearch } from "react-icons/fa";
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
          <button
            onClick={props.handleFormSubmit}
            className="btn btn-lg btn-outline-info text-dark my-sm-0"
            type="submit"
          >
            <FaSearch className="search-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
