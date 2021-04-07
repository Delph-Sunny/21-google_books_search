import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./style.css";

function SearchBar(props) {
  return (
    <section className="border my-color pb-2 mb-3">
      <div className="col-md-10 col-sm-12 mx-auto ">
        <div className="p-2 rounded">
          <h5 className=" mb-2 text-white">Book</h5>
          <div className="input-group">
            <input
              className="form-control mr-sm-2"
              onChange={props.handleInputChange}
              value={props.value}
              type="search"
              placeholder="Search books..."
              aria-label="Search"
            />
            <Button
              onClick={props.handleFormSubmit}
              className="submit-btn"
              size="lg"
              type="submit"
            >
              <FaSearch className="search-icon" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
