import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratings from "../Ratings";
import Buttons from "../Buttons";
import "./style.css";

function BookCard(props) {
  return (
    <Col sm={12} key={props.id} className="card">
      <Row>
        <Col xs={12} sm={8} md={8}>
          <h4 className="font-bold">{props.title}</h4>
          <p className="authors">
            Written by{" "}
            {props.authors ? props.authors.join(`, `) : "Unknown author"}
          </p>
        </Col>
        <Col xs={12} sm={4} md={4}>
          <Row className="d-flex justify-content-end button-ctn">
            <Buttons bgColor="#629db6">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Buttons>

            <Buttons bgColor={props.bgColor} onClick={props.onClick}>
              {props.label}
            </Buttons>
          </Row>
          <Row
            className="justify-content-end rating-ctn"
            style={{ display: props.display }}
          >
            <Ratings rating={props.rating} />
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={2} md={2}>
          <img
            className="img-thumbnail img-fluid w-35"
            src={props.image}
            alt={props.title}
          />
        </Col>
        <Col xs={12} sm={10} md={10}>
          <p className="description">{props.description}</p>
        </Col>
      </Row>
    </Col>
  );
}

export default BookCard;
