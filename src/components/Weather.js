import React from "react";
import FiveDays from "./FiveDays";
import { Col, Row } from 'react-bootstrap';

const Weather = props => (
<Row>
    <Col className="weather__container">
        <div className="weather__result">
            {
                props.city && <p className="weather__key"> Lokalizacja:
                <span className="weather__value">  {props.city}</span>
                </p>
            }
            {
                props.temperature && <p className="weather__key"> Temperatura:
                <span className="weather__value">  {props.temperature}&deg;C</span>
                </p>
            }
            {
                props.pressure && <p className="weather__key"> Ciśnienie:
                <span className="weather__value">  {props.pressure}</span>
                </p>
            }
            {

                props.sunrise && <p className="weather__key"> Wschód słońca o:
               <span className="weather__value">   {props.sunrise}</span>
                </p>
            }
            {
                props.sunset && <p className="weather__key"> Zachód słońca o:
      <span className="weather__value">  {props.sunset}</span>
                </p>
            }
            {
                props.sunrise && <p className="weather__key"> Prędkość wiatru:
                <span className="weather__value">  {props.wind}</span>
                </p>
            }
            {
                props.description && <p className="weather__key"> Warunki pogodowe:
                <span className="weather__value">  {props.description}</span>
                </p>
            }
            {
                props.error && <p className="weather__error">
                    {props.error}
                </p>}

            {props.city && <FiveDays city={props.city} />}
        </div>
    </Col>
    </Row>

);

export default Weather;