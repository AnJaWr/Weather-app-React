import React from "react";
import { Col, Row } from 'react-bootstrap';


const Form = props => (


        <form className="form" onSubmit={props.getWeather}>    <Row>
            <Col xl={7} lg={7} md={8} sm={8} xs={12}>
                <input type="text" name="city" placeholder="Miejscowość..." />
            </Col>
            <Col xl={5} lg={5} md={4} sm={4} xs={12}>
                <button type="sumbit" className="button__form">Sprawdź pogodę </button>
            </Col>    </Row>
        </form>


);


export default Form;