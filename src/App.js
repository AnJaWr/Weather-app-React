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

  
  // translation = [
  // ["light rain", "lekki deszcz"],
  // ["few clouds", "niewielkie zachmurzenie"],
  // ["scattered clouds", "rozproszone chmury"],
  // ["broken clouds", "przejaśnienia"],
  // ["shower rain", "lekki deszcz"],
  // ["rain", pl : "deszcz"],
  // ["thunderstorm", "burza"],
  // ["thunderstorm with rain", "burza i deszcz"],
  // ["thunderstorm with heavy rain", "burza i deszcz"],
  // ["light thunderstorm", "lekka burza"],
  // ["heavy thunderstorm", "sroga burza z piorunami"],
  // ["ragged thunderstorm", "przejściowe burze"],
  // ["thunderstorm with light drizzle", "burza z lekką mżawką"],
  // ["thunderstorm with drizzle", "burza z  mżawką"],
  // ["thunderstorm with heavy drizzle", "burza z silną mżawką"],
  // ["heavy intensity drizzle", "intensywna mżawka"],
  // ["light intensity drizzle rain", "mżawka, deszcz, natężenie światła"],
  // ["drizzle rain", n"deszcz, mżawka" ],
  // ["heavy intensity drizzle rain", "intensywna mżawka"],
  // ["shower rain and drizzle", "deszcz"],
  // ["heavy shower rain and drizzle", "ulewny deszcz i mżawka"],
  // ["shower drizzle", "mżawka"],
  // ["drizzle", "mżawka"],
  // ["light rain", "lekki deszcz"],
  // ["moderate rain", "umiarkowane opady"],
  // ["heavy intensity rain", "mocne opady deszczu"],
  // ["very heavy rain", "mocne opady deszczu"],
  // ["extreme rain", "ulewa"],
  // ["freezing rain", "marznący deszcz"],
  // ["light intensity shower rain", "lekki deszcz"],
  // ["shower rain", "deszcz"],
  // ["heavy intensity shower rain", "intensywny deszcz"],
  // ["ragged shower rain", "przejściowe opady deszczu"],
  // ["Snow", "śnieg"],
  // ["Heavy snow", "Mocne opady śniegu"],
  // ["Sleet", "śnieg z deszczem"],
  // ["Light shower sleet", "śnieg z deszczem"],
  // ["Shower sleet", "śnieg z deszczem"],
  // ["Light rain and snow", "śnieg z deszczem"],
  // ["Rain and snow", "deszcz i śnieg"],
  // ["Light shower snow", "lekkie opady śniegu"],
  // ["Shower snow", "lekki śnieg"],
  // ["Heavy shower snow", "opady śniegu"],
  // ["Smoke", "smog"],
  // ["Haze", "mgła"],
  // ["sand/ dust whirls", "wiry piasku / pyłu"],
  // ["fog", "mgła"],
  // ["sand", "piasek"],
  // ["dust", "kurz"],
  // ["volcanic ash", "pył wulkaniczny"],
  // ["squalls", "szkwał"],
  // ["tornado", "tornado"],
  // ["scattered clouds", "rozproszone chmury"],
  // ["broken clouds", "zachmurzenie z przejaśnieniami chmury"],
  // ["overcast clouds", "duże zachmurzenie"],
  // ["few clouds", "niewielkie zachmurzenie"],
  // ["clear sky", "czyste niebo"],
  // ]

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


