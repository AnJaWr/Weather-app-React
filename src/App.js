import React, { Component } from "react";
import './App.css';
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import {Container, Col, Row} from 'react-bootstrap';
import translation from "./components/Translation"


const API_KEY = "f525ab2b08b02345263cf7db59107bee"

class App extends Component {
  state = {
    city: undefined,
    temperature: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    wind: undefined,
    description: undefined,
    error: undefined,

  }
translation= [...translation]

  

  setSunrise = () => {
    var date = new Date(this.state.sunrise * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    this.setState({ sunrise: formattedTime })
  }

  setSunset = () => {
    var date = new Date(this.state.sunset * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    this.setState({ sunset: formattedTime })
  }
  setCity = (newCity) => {
    this.setState({ city: newCity })
  }

  translateDescription = () => { 
 let translation = this.translation;
for (var i = 0; i < translation.length; i++) {  
 var innerArray = [...translation[i]];
    // console.log(innerArray);
if(this.state.description === innerArray[0] ){
      this.setState({
        description : innerArray[1]
      })
      }
    }}
  

  getWeather = async (e) => {
    e.preventDefault()

    try {

      const city = e.target.elements.city.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

      const data = await api_call.json()

      if (city) {
        console.log(data);

        this.setState({
          city: data.name,
          temperature: data.main.temp,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          wind: data.wind.speed,
          description: data.weather[0].description,
          // tu byla tablica
          error: ""
        });
        this.setSunset()
        this.setSunrise()
        this.translateDescription()


      }

      else {

        this.setState({
          city: undefined,
          temperature: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          wind: undefined,
          description: undefined,
          error: "Proszę podać nawę miejscowości"

        });

      }
    } catch (error) {
      this.setState({
        city: undefined,
        temperature: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        wind: undefined,
        description: undefined,
        error: "Nie znaleziono takiej miejscowości"

      });

    }

  }


  render() {
    return (
  

          <Container fluid>
          <Row className="justify-content-center main">
              <Col  xs={12} lg={6} md={12} sm={12}  className=" title-container">

                      <Titles />
                    </Col>
            <Col xs={12} lg={6} md={12} sm={12}  className="form-container">
                
                      <Form
                        getWeather={this.getWeather}
                        setSunrise={this.setSunrise} />

                      <Weather
                        city={this.state.city}
                        setCity={this.setCity}
                        temperature={this.state.temperature}
                        pressure={this.state.pressure}
                        sunrise={this.state.sunrise}
                        sunset={this.state.sunset}
                        wind={this.state.wind}
                        description={this.state.description}
                        error={this.state.error}
                        setSunrise={this.setSunrise}
                      />

                    </Col>
                  </Row>
                </Container>
     
    );
  }
}
export default App;


