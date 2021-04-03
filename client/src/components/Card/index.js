import React from "react";
import { Row, Col } from "../Grid";
import Ratings from "../Ratings";
import Buttons from "../Buttons";

function Card(props) {    
    return (
        <li key={props.id}>
            <Row>                
                <Col size="md-10">
                    <h4 className="font-bold">{props.title}</h4>
                    <p className="authors">Written by {props.authors ? props.authors.join(`, `) : "Unknown author"}</p>
                </Col>
                <Col size="md-2">
                    <Row>
                <Buttons bgColor={"#808080"} onClick={props.handleClickView}>View</Buttons>
                <Buttons bgColor={"#ffcb74"} onClick={props.onClick}>Save</Buttons>
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