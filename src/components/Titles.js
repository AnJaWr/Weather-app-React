import React from "react";
import { Col, Row } from 'react-bootstrap';

const Titles = () => (

    <Row className="justify-content-md-center">
    <Col xs={12} sm={12} md={8} className="title-container__div">
        <h1 className="title-container__title"> Pogodynka </h1>
        <p className="title-container__subtitle">Sprawdź, jaka jest pogoda w wybranym mieście </p>
    </Col>
        <div className="credits">Photo by Wim van 't Einde on Unsplashn</div>
    </Row>
   
);


export default Titles;