import React from "react";
import { Container } from "../Grid";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid my-3">
      <Container className="text-center">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books of Interest</p>
      </Container>
    </div>
  );
}

export default Jumbotron;
