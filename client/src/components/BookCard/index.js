import React from "react";
//import { Row, Col } from "../Grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratings from "../Ratings";
import Buttons from "../Buttons";
import "./style.css";

function BookCard(props) {
  console.log("from card: ", props.link);
  return (
    <li key={props.id}>
      <Row>
        <Col md={10}>
          <h4 className="font-bold">{props.title}</h4>
          <p className="authors">
            Written by{" "}
            {props.authors ? props.authors.join(`, `) : "Unknown author"}
          </p>
        </Col>
        <Col md={2}>
          <Row>
            <Buttons bgColor={"#0B98D4"}>
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </Buttons>
            <Buttons bgColor={props.bgColor} onClick={props.onClick}>
              {props.label}
            </Buttons>
          </Row>
          <Row style={{ display: props.display }} >
            <Ratings rating={props.rating}/>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={8} md={8}>
          <img
            className="img-thumbnail img-fluid w-35"
            src={props.image}
            alt={props.title}
          />
        </Col>
        <Col xs={12} sm={8} md={8}>
          <p>{props.description}</p>
        </Col>
      </Row>
    </li>
  );
}

export default BookCard;
