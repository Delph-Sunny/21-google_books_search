import React from "react";
import { Row, Col } from "../Grid";
import Ratings from "../Ratings";
import Buttons from "../Buttons";

function Card(props) {   
console.log("from card: ", props.link)
    return (
        <li key={props.id}>
            <Row>                
                <Col size="md-10">
                    <h4 className="font-bold">{props.title}</h4>
                    <p className="authors">Written by {props.authors ? props.authors.join(`, `) : "Unknown author"}</p>
                </Col>
                <Col size="md-2">
                    <Row>
                <Buttons bgColor={"#0B98D4"} ><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></Buttons>
                <Buttons bgColor={props.bgColor} onClick={props.onClick}>{props.label}</Buttons>
                </Row>
                <Row>
                <Ratings rating={props.rating}/>
                </Row>
                </Col>
            </Row>

            <Row>
                <Col size="12 sm-4 md-4">
                    <img
                        className="img-thumbnail img-fluid w-35"
                        src={props.image}
                        alt={props.title}
                    />
                </Col>
                <Col size="12 sm-8 md-8">                   
                    <p>{props.description}</p>                   
                </Col>
            </Row>
        </li>
    );
}

export default Card;