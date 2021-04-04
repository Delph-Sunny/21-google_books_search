import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import "./style.css";

function MyJumbotron() {
  return (
    <Jumbotron
      fluid
      className="my-3 myhero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/icons/hero3.jpg"})`,
      }}
    >
      <Container className="text-center">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </Container>
    </Jumbotron>
  );
}

export default MyJumbotron;
