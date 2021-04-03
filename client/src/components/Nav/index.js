import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="text-white display-4 py-2">Google Books</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="pl-4 ml-4 collapse navbar-collapse"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link className="nav-item nav-link text-white h3" to="/">
            Search
          </Link>
          <Link className="nav-item nav-link text-white h3" to="/saved">
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
