import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function MyNav() {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand><span><img src="./icons/favicon.ico" alt="Book Search logo"/></span>&#160;Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-item nav-link h5" to="/">
            Search
          </Link>
          <Link className="nav-item nav-link h5" to="/saved">
            Saved
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
